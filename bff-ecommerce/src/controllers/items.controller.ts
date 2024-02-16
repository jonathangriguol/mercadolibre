import { Request, Response, Router } from "express";
import itemsService from "../services/items.service";
import ItemDetail from "../interfaces/itemDetail.model";
import Item from "@/interfaces/item.model";

const itemsController = Router();

/**
 * This endpoint is used to perform product searches. You can provide
 * query parameters to filter results based on search criteria.
 */
export const getItems = async (req: Request, res: Response) => {
  try {
    const searchQuery: string | undefined = req.query.search as
      | string
      | undefined;

    const items = await itemsService.getItems(searchQuery);

    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los items" });
  }
};

/**
 * This endpoint is used to obtain the details of a specific product identified by its ID.
 */

export const getItemById = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("req.params ==>", req.params);

  Promise.all([
    itemsService.getItemById(id),
    itemsService.getItemDescriptionById(id),
  ])
    .then(([itemResponse, itemDescriptionResponse]) => {
      const { data: itemData } = itemResponse;
      const { data: itemDescriptionData } = itemDescriptionResponse;

      const itemDetail: ItemDetail = {
        author: {
          // I don't have this information
          name: "Jonathan",
          lastname: "Griguol",
        },
        item: {
          id: itemData.id,
          title: itemData.title,
          price: {
            currency: itemData.currency_id,
            amount: itemData.price,
            decimals: 2, // Idon't have this information
          },
          picture: itemData.pictures[0].url,
          condition: itemData.condition,
          free_shipping: itemData.shipping.free_shipping,
          sold_quantity: 0, // I don't have this information
          description: itemDescriptionData.plain_text,
        },
      };

      res.json(itemDetail);
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
      res.status(500).json({
        message: "Error al obtener los datos de los servicios externos",
      });
    });
};

export default itemsController;
