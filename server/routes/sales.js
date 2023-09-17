import express from "express";
import {
    updateSale,
    getSaleById,
    getAllSales,
    getRetailerSales,
} from "../controllers/sales.js";
import { verifyAdmin, verifyClient, verifyRetailer, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE
router.put('/:id/:saleId', verifyRetailer, updateSale);

//GET ALL
router.get('/all/:id', verifyAdmin, getAllSales);

// Get sales by retailer ID
router.get('/retailer/:id', getRetailerSales);

//Get sale By ID
router.get('/:id/:saleId', verifyRetailer, getSaleById);

export default router;