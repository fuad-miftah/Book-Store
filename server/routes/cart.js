import express from "express";
import {
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    viewCartItem,
    viewClientCart,
    viewAllCart,
} from "../controllers/cart.js";
import { verifyAdmin, verifyClient, verifyRetailer, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post('/:id/:bookId', verifyClient, addToCart);

//UPDATE
router.put('/:id/:bookId', verifyClient, updateCartItemQuantity);

//DELETE
router.delete('/:id/:bookId', verifyClient, removeFromCart);

// GET ALL Client's cart items
router.get('/client/:id', verifyClient, viewClientCart);

//GET ALL
router.get('/all/:id', verifyAdmin, viewAllCart);

// GET Single Cart Item
router.get('/:id/:bookId', verifyClient, viewCartItem);

export default router;