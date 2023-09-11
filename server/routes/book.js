import express from "express";
import {
    createBook,
    updateBook,
    deleteBook,
    getBook,
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

//GET ALL
router.get("/", getBooks);

export default router;