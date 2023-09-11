import express from "express";
import {
    createSale,
    updateSale,
    getSaleById,
    getAllSales,
    getRetailerSales,
} from "../controllers/sales.js";
import { verifyAdmin, verifyClient, verifyRetailer, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post('/:id', verifyRetailer, createSale);

//UPDATE
router.put('/:id/:saleId', verifyRetailer, updateSale);

//Get Order By ID
router.get('/:id/:saleId', verifyRetailer, getSaleById);

//GET ALL
router.get('/:id/all', verifyAdmin, getAllSales);

// Get sales by retailer ID
router.get('/:id/retailer', getRetailerSales);

export default router;