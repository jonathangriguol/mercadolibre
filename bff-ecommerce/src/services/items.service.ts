import axios from "axios";
import config from "../configs/config.js";
import Item from "../models/item.model.js";

import { ITEMS_PATH, SITES_MLA_PATH } from "../constants/urls.constants.js";
import { DECIMALS } from "../constants/bussiness.constants.js";

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
      const url = id
        ? `${config.meli_api_url}/${ITEMS_PATH}/${id}/description`
        : `${config.meli_api_url}`;

      const response = await axios.get(url);

      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener los productos");
    }
  },
};

export default itemsService;
