import Book from "../models/Book.js";
import Retailer from "../models/Retailer.js";
import User from "../models/User.js";

export const createBook = async (req, res, next) => {

    const { id: userId } = req.params; // Extract userId from the URL parameter
    const { ...bookData } = req.body; // Destructure other book data

    try {
        // Find the retailer by userId
        const retailer = await Retailer.findOne({ userId });
        if (!retailer) {
            return res.status(404).json({ message: "Retailer not found" });
        }

        const newBook = new Book({
            ...bookData,
            retailerId: retailer._id, // Set the retailerId from the found retailer's _id
        });

        const savedBook = await newBook.save();

        // Update the retailer with the newly created book's _id
        retailer.listedBooks.push(savedBook._id);
        await retailer.save();

        res.status(201).json("Book has been created.");
    } catch (err) {
        next(err);
    }
};


export const updateBook = async (req, res, next) => {
    try {
        const updatedBook = await Book.findById(req.params.bookId);

        // Check if the book exists
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        // Update the book
        updatedBook.set(req.body);
        const savedBook = await updatedBook.save();

        res.status(200).json(savedBook);
    } catch (err) {
        next(err);
    }
};

export const deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.bookId);

        // Check if the book exists
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }


        const retailer = await Retailer.findOne({ _id: book.retailerId });
        retailer.listedBooks.pull(req.params.bookId);
        await retailer.save();

        await Book.deleteOne({ _id: req.params.bookId });

        res.status(204).json({ message: "Book has been deleted." });



    } catch (err) {
        next(err);
    }
};

export const getBook = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch (err) {
        next(err);
    }
};

export const getBooks = async (req, res, next) => {
    try {
        const books = await Book.find(req.query);
        res.status(200).json(books);
    } catch (err) {
        next(err);
    }
};

// Get all books listed by a retailer
export const getRetailerBook = async (req, res, next) => {
    try {
        const retailer = await Retailer.findOne({ userId: req.params.id });
        const books = await Book.find({ retailerId: retailer._id });
        res.status(200).json(books);
    } catch (err) {
        next(err);
    }
};