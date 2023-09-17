import express from "express";
import {
    createOrder,
    updateOrderStatus,
    getOrderById,
    getAllOrders,
    getClientOrders,
    deleteOrder,
} from "../controllers/order.js";
import { verifyAdmin, verifyClient, verifyRetailer, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post('/:id/:bookId', verifyClient, createOrder);

//UPDATE
router.put('/:id/:orderId', verifyClient, updateOrderStatus);

// Get orders by client user ID
router.get('/client/:id', verifyClient, getClientOrders);

//GET ALL
router.get('/all/:id', verifyAdmin, getAllOrders);

//Get Order By ID
router.get('/:id/:orderId', verifyClient, getOrderById);


// delete order
router.delete('/:id/:orderId', verifyClient, deleteOrder);

export default router;