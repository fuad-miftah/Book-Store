import express from "express";
import {
    createBook,
    updateBook,
    deleteBook,
    getBook,
    getRetailerBook,
    getBooks,
} from "../controllers/book.js";
import { verifyAdmin, verifyRetailer, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:id", verifyRetailer, createBook);

//UPDATE
router.put("/:id/:bookId", verifyRetailer, updateBook);

//DELETE
router.delete("/:id/:bookId", verifyRetailer, deleteBook);

//GET
router.get("/:id", getBook);

//GET retailer books
router.get("/retailer/:id", verifyRetailer, getRetailerBook);

//GET ALL
router.get("/", getBooks);

export default router;