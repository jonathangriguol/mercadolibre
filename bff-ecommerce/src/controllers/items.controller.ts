import { Request, Response, Router } from "express";
import itemsService from "../services/items.service.ts";
import Item from "../models/item.model.ts";

const itemsController = Router();

/** 
 * This endpoint is used to perform product searches. You can provide 
 * query parameters to filter results based on search criteria.
 */
export const getItems = async (req: Request, res: Response) => {
  try {
    //console.log('********************************************************************** ', searchQuery)
    const searchQuery: string | undefined = req.query.search as string | undefined;

    const items: Array<Item> = await itemsService.getItems(searchQuery);

    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los items' });
  }
};


/**
 * This endpoint is used to obtain the details of a specific product identified by its ID.
 */

export const getItemById = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log('req.params ==>', req.params)
  Promise.all([
    itemsService.getItemById(id),
    itemsService.getItemDescriptionById(id),
  ])
    .then(([itemResponse, itemDescriptionResponse]) => {
      const finalData = {
        dataFromService1: itemResponse.data,
        dataFromService2: itemDescriptionResponse.data
      };
      res.json(finalData);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error al obtener los datos de los servicios externos' });
    });
};

export default itemsController;
