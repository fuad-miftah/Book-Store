import Client from '../models/Client.js';
import Book from '../models/Book.js';
import { createSuccess } from '../utils/success.js';
import { createError } from '../utils/error.js';

// Add a book to the cart or update its quantity and total price
export const addToCart = async (req, res, next) => {
    const { id: userId, bookId } = req.params;
    const { quantity } = req.body;

    try {
        const client = await Client.findOne({ userId });

        if (!client) {
            return res.status(404).json(createError(404, 'Client not found.'));
        }

        const book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).json(createError(404, 'Book not found.'));
        }

        // Check if the book already exists in the client's cart
        const existingCartItem = client.cart.find(
            (cartItem) => cartItem.bookId.equals(book._id)
        );

        if (existingCartItem) {
            // Update the quantity and total price of the existing cart item
            existingCartItem.quantity += quantity;
            existingCartItem.totalPrice = book.price * existingCartItem.quantity;
        } else {
            // Create a new cart item
            const totalPrice = book.price * quantity;
            const newCartItem = {
                bookId,
                quantity,
                totalPrice,
            };

            // Add the new cart item to the client's cart array
            client.cart.push(newCartItem);
        }

        await client.save();

        res.status(201).json(createSuccess('Book added to cart'));
    } catch (error) {
        next(error);
    }
};


// Update the quantity of a book in the cart
export const updateCartItemQuantity = async (req, res, next) => {
    const { id: userId, bookId } = req.params;
    const { quantity } = req.body;

    try {
        const client = await Client.findOne({ userId }).populate('cart.bookId');

        if (!client) {
            return res.status(404).json(createError(404, 'Client not found.'));
        }

        // Find the cart item with the specified bookId
        const cartItem = client.cart.find((item) =>
            item.bookId.equals(bookId)
        );

        if (!cartItem) {
            return res.status(404).json(createError(404, 'Cart item not found.'));
        }

        // Update the quantity and total price of the cart item
        cartItem.quantity = quantity;
        console.log("re");
        console.log(quantity, cartItem.bookId.price);
        cartItem.totalPrice = cartItem.bookId.price * quantity;
        console.log(cartItem.totalPrice, cartItem.quantity);
        console.log("re1");

        await client.save();
        console.log("re2");

        res.status(200).json(createSuccess('Cart item quantity updated'));
    } catch (error) {
        next(error);
    }
};

// Remove a book from the cart
export const removeFromCart = async (req, res, next) => {
    const { id: userId, bookId } = req.params;

    try {
        const client = await Client.findOne({ userId });

        if (!client) {
            return res.status(404).json(createError(404, 'Client not found.'));
        }

        // Find the index of the cart item with the specified bookId
        const index = client.cart.findIndex((item) =>
            item.bookId.equals(bookId)
        );

        if (index === -1) {
            return res.status(404).json(createError(404, 'Cart item not found.'));
        }

        // Remove the cart item from the client's cart array
        client.cart.splice(index, 1);

        await client.save();

        res.status(204).json(createSuccess('Cart item removed'));
    } catch (error) {
        next(error);
    }
};


// View a single cart item
export const viewCartItem = async (req, res, next) => {
    const { id: userId, bookId } = req.params;

    try {
        const client = await Client.findOne({ userId });

        if (!client) {
            return res.status(404).json(createError(404, 'Client not found.'));
        }

        // Find the cart item with the specified bookId
        const cartItem = client.cart.find((item) =>
            item.bookId.equals(bookId)
        );

        if (!cartItem) {
            return res.status(404).json(createError(404, 'Cart item not found.'));
        }

        res.status(200).json(createSuccess('Cart item found.', cartItem));
    } catch (error) {
        next(error);
    }
};


// View the client's cart contents
export const viewClientCart = async (req, res, next) => {
    const { id: userId } = req.params;

    try {
        const client = await Client.findOne({ userId }).populate('cart.bookId');

        if (!client) {
            return res.status(404).json(createError(404, 'Client not found.'));
        }

        res.status(200).json(createSuccess('Client cart found.', client.cart));
    } catch (error) {
        next(error);
    }
};


// View all cart items (Admin access only)
export const viewAllCart = async (req, res, next) => {
    try {
        const clients = await Client.find().populate('cart.bookId');

        if (!clients) {
            return res.status(404).json(createError(404, 'No cart items found.'));
        }

        const allCartItems = clients.map((client) => ({
            clientId: client._id,
            cart: client.cart,
        }));

        res.status(200).json(createSuccess('cart found.', allCartItems));
    } catch (error) {
        next(error);
    }
};
