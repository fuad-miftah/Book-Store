import express from "express";
import {
    createOrder,
    updateOrderStatus,
    getOrderById,
    getAllOrders,
    getClientOrders,
} from "../controllers/order.js";
import { verifyAdmin, verifyClient, verifyRetailer, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post('/:id', verifyClient, createOrder);

//UPDATE
router.put('/:id/:orderId', verifyClient, updateOrderStatus);

//Get Order By ID
router.get('/:id/:orderId', verifyClient, getOrderById);

//GET ALL
router.get('/:id/all', verifyAdmin, getAllOrders);

// Get orders by client user ID
router.get('/:id/client', verifyClient, getClientOrders);

export default router;