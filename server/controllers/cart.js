import Client from '../models/Client.js'; // Import your Client model
import Book from '../models/Book.js'; // Import your Book model
import { createError } from '../utils/error.js';

// Add a book to the cart
export const addToCart = async (req, res, next) => {
    try {
        const { clientId, bookId, quantity } = req.body;

        // Validate input (e.g., ensure quantity is a positive integer)

        // Find the client by clientId
        const client = await Client.findById(clientId);

        if (!client) {
            return next(createError(404, 'Client not found'));
        }

        // Check if the bookId is valid
        const book = await Book.findById(bookId);

        if (!book) {
            return next(createError(404, 'Book not found'));
        }

        // Check if the book is already in the cart
        const existingCartItemIndex = client.cart.findIndex(
            (item) => item.bookId.toString() === bookId
        );

        if (existingCartItemIndex !== -1) {
            // If the book is already in the cart, update the quantity
            client.cart[existingCartItemIndex].quantity += quantity;
        } else {
            // If not, add the book to the cart
            client.cart.push({
                bookId,
                quantity,
                totalPrice: book.price * quantity, // Calculate the total price
            });
        }

        // Save the updated client document
        await client.save();

        res.status(200).json(client.cart);
    } catch (error) {
        next(error);
    }
};

// Update the quantity of a book in the cart
export const updateCartItemQuantity = async (req, res, next) => {
    try {
        const { clientId, bookId, quantity } = req.body;

        // Validate input (e.g., ensure quantity is a positive integer)

        // Find the client by clientId
        const client = await Client.findById(clientId);

        if (!client) {
            return next(createError(404, 'Client not found'));
        }

        // Find the index of the book in the cart
        const cartItemIndex = client.cart.findIndex(
            (item) => item.bookId.toString() === bookId
        );

        if (cartItemIndex === -1) {
            return next(createError(404, 'Book not found in the cart'));
        }

        // Update the quantity and total price
        client.cart[cartItemIndex].quantity = quantity;
        client.cart[cartItemIndex].totalPrice = client.cart[cartItemIndex].quantity * book.price;

        // Save the updated client document
        await client.save();

        res.status(200).json(client.cart);
    } catch (error) {
        next(error);
    }
};

// Remove a book from the cart
export const removeFromCart = async (req, res, next) => {
    try {
        const { clientId, bookId } = req.params;

        // Find the client by clientId
        const client = await Client.findById(clientId);

        if (!client) {
            return next(createError(404, 'Client not found'));
        }

        // Find the index of the book in the cart
        const cartItemIndex = client.cart.findIndex(
            (item) => item.bookId.toString() === bookId
        );

        if (cartItemIndex === -1) {
            return next(createError(404, 'Book not found in the cart'));
        }

        // Remove the book from the cart
        client.cart.splice(cartItemIndex, 1);

        // Save the updated client document
        await client.save();

        res.status(204).send(); // Respond with a success status code
    } catch (error) {
        next(error);
    }
};

// View the cart contents
export const viewCart = async (req, res, next) => {
    try {
        const { clientId } = req.params;

        // Find the client by clientId
        const client = await Client.findById(clientId).populate('cart.bookId');

        if (!client) {
            return next(createError(404, 'Client not found'));
        }

        res.status(200).json(client.cart);
    } catch (error) {
        next(error);
    }
};
