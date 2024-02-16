import axios from "axios";
import config from "../configs/config";

import { ITEMS_PATH, SITES_MLA_PATH } from "../constants/urls.constants";
import { DECIMALS } from "../constants/bussiness.constants";

const itemsService = {
  getItems: async (searchQuery: string | undefined): Promise<any[]> => {
    try {
      const url = `${config.meli_api_url}/${SITES_MLA_PATH}/search?q=${
        searchQuery ? encodeURIComponent(searchQuery) : ""
      }`;

      const { data } = await axios.get(url);

      const items = [];
  
      for (let i = 0; i < Math.min(data?.results.length, 4); i++) {
        items.push({
          id: data.results[i].id,
          title: data.results[i].title,
          price: {
            currency: data.results[i].currency_id,
            amount: data.results[i].price,
            decimals: DECIMALS,
          },
          picture: data.results[i].thumbnail,
          condition: data.results[i].condition,
          free_shipping: data.results[i].shipping.free_shipping,
        });
      }

      return items;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener el listado de productos");
    }
  },

  getItemById: async (id) => {
    try {
      const url = `${config.meli_api_url}/${ITEMS_PATH}/${id}`;

      const response = await axios.get(url);

      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener el producto");
    }
  },

  getItemDescriptionById: async (id) => {
    try {
      const url = `${config.meli_api_url}/${ITEMS_PATH}/${id}/description`;

      const response = await axios.get(url);

      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener el detalle del producto");
    }
  },
};

export default itemsService;
