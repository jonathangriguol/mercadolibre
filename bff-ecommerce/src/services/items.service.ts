import axios from "axios";
import config from "../configs/config";
import Item from "../interfaces/itemDetail.model";

import { ITEMS_PATH, SITES_MLA_PATH } from "../constants/urls.constants";
import { DECIMALS } from "../constants/bussiness.constants";

const itemsService = {
  getItems: async (searchQuery: string | undefined): Promise<Item[]> => {
    try {
      const url = `${config.meli_api_url}/${SITES_MLA_PATH}/search?q=${
        searchQuery ? encodeURIComponent(searchQuery) : ""
      }`;

      const response = await axios.get(url);
      const items: Item[] = response.data.results.map((item: any) => {
        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: DECIMALS,
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
        };
      });

      return items;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener los productos");
    }
  },
  getItemById: async (id) => {
    try {
      const url = `${config.meli_api_url}/${ITEMS_PATH}/${id}`;

      const response = await axios.get(url);

      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener los productos");
    }
  },

  getItemDescriptionById: async (id) => {
    try {
      const url = id `${config.meli_api_url}/${ITEMS_PATH}/${id}/description`;

      const response = await axios.get(url);

      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener los productos");
    }
  },
};

export default itemsService;
