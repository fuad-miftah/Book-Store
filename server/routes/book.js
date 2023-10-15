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

//CREATE Based on User Id
router.post("/:id", verifyRetailer, createBook);

//UPDATE Using User Id and BookId
router.put("/:id/:bookId", verifyRetailer, updateBook);

//DELETE Using UserId and BookId
router.delete("/:id/:bookId", verifyRetailer, deleteBook);

//GET
router.get("/:id", getBook);

//GET retailer books using User Id
router.get("/retailer/:id", verifyToken, verifyRetailer, getRetailerBook);

//GET ALL
router.get("/", getBooks);

export default router;