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

        res.status(200).json(savedBook);
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

        // Check if the userId of the book's retailer matches the authenticated user's userId
        const retailer = await Retailer.findOne({ userId: req.params.id });

        // Fetch the user by userId
        const user = await User.findById(req.params.id);

        // Check if the user is an admin
        const isAdmin = user.role === "Admin";

        if ((!retailer || retailer._id.toString() !== updatedBook.retailerId.toString()) && !isAdmin) {
            return res.status(403).json({ message: "You are not authorized to update this book" });
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

        // Check if the userId of the book's retailer matches the authenticated user's userId
        const retailer = await Retailer.findOne({ userId: req.params.id });

        // Fetch the user by userId
        const user = await User.findById(req.params.id);

        // Check if the user is an admin
        const isAdmin = user.role === "Admin";

        if ((!retailer || retailer._id.toString() !== book.retailerId.toString()) && !isAdmin) {
            return res.status(403).json({ message: "You are not authorized to delete this book" });
        }

        //Update the retailer's listedBooks
        retailer.listedBooks.pull(req.params.bookId);
        await retailer.save();

        await Book.deleteOne({ _id: req.params.bookId });

        res.status(200).json({ message: "Book has been deleted." });
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
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        next(err);
    }
};