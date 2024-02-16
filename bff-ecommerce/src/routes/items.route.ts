import { Router } from 'express';
import { getItemById, getItems } from "../controllers/items.controller";

const router = Router();

/**
 * Endpoint to obtain the list of Items
 * Implements a middelware to avoid wrong requests (eg.: when "search" param is not present)
 */

router.get('/items', getItems);

/**
 * Endpoint to obtain the detail for an Item
 */
router.get('/items/:id', getItemById);

export default router;