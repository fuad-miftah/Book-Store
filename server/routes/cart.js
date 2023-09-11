import express from "express";
import {
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    viewCart,
} from "../controllers/cart.js";
import { verifyAdmin, verifyClient, verifyRetailer, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post('/:id', verifyClient, addToCart);

//UPDATE
router.put('/:id/:bookId', verifyClient, updateCartItemQuantity);

//DELETE
router.delete('/:id/:bookId', verifyClient, removeFromCart);

//GET ALL
router.get('/:id', verifyClient, viewCart);

export default router;