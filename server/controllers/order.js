import Order from "../models/Order.js";
import Book from "../models/Book.js";
import Client from "../models/Client.js";
import Retailer from "../models/Retailer.js";
import Sales from "../models/Sales.js";

// Create a new order
// Create a new order
export const createOrder = async (req, res, next) => {
    const { id: userId, bookId } = req.params; // Extract userId and bookId from the URL parameters
    const { address, postalCode, quantity, totalPrice } = req.body; // Destructure other order data

    try {
        // Fetch book data from the database based on bookId
        const book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        // Create a new order
        const newOrder = new Order({
            userId,
            bookId: [bookId], // Assuming you want to create an order for a single book
            quantity,
            address,
            postalCode,
            orderStatus: "Processing", // Set the initial order status
            totalPrice,
        });

        const savedOrder = await newOrder.save();

        // Create a new sale
        const newSale = new Sales({
            retailerId: book.retailerId, // Reference to the retailer
            bookId, // Reference to the book
            totalAmount: totalPrice, // Set the totalAmount as totalPrice
            paymentReceived: false, // Set paymentReceived to false
            orderId: savedOrder._id, // Reference to the newly created order
        });

        const savedSale = await newSale.save();

        // Update the book's quantity (decrease by the ordered quantity)
        book.quantity -= quantity;
        await book.save();

        // Update the user's order history with the newly created order's _id
        const client = await Client.findOne({ userId });
        if (client) {
            client.orderHistory.push(savedOrder._id);
            await client.save();
        }

        // Update the retailer's sale history with the newly created sale's _id
        const retailer = await Retailer.findOne({ _id: book.retailerId });
        if (retailer) {
            retailer.saleHistory.push(savedSale._id);
            await retailer.save();
        }

        res.status(201).json("Order and Sale have been created.");
    } catch (err) {
        next(err);
    }
};



// Update the order status
export const updateOrderStatus = async (req, res, next) => {
    try {
        const { id, orderId } = req.params;
        const { orderStatus } = req.body;
        // Find the order by orderId and update its status
        const updatedOrder = await Order.findByIdAndUpdate(orderId, { orderStatus }, { new: true });
        res.status(200).json(updatedOrder);
    } catch (error) {
        next(error);
    }

};

// Delete an order by ID
export const deleteOrder = async (req, res, next) => {
    try {
        const { id: userId, orderId } = req.params;

        // Find the order by orderId
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        // Check if the order can be deleted based on business rules (e.g., order status)
        if (order.orderStatus === "Processing") {
            // Retrieve the associated book
            const book = await Book.findById(order.bookId);

            // Check if the book exists
            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }

            // Increase the book's quantity by the quantity in the order
            book.quantity += order.quantity;

            // Remove the order from the client's orderHistory
            const client = await Client.findOne({ userId });
            if (client) {
                client.orderHistory.pull(orderId);
                await client.save();
            }

            // Find the associated sale
            const sale = await Sales.findOne({ orderId });

            if (sale) {
                // Remove the sale reference from retailer's saleHistory
                const retailer = await Retailer.findOne({ _id: book.retailerId });
                if (retailer) {
                    retailer.saleHistory.pull(sale._id);
                    await retailer.save();
                }

                // Delete the sale
                await Sales.deleteOne({ _id: sale._id });
            }

            // Delete the order
            await Order.deleteOne({ _id: orderId });

            // Save the changes to the book and send a success response
            await book.save();
            res.status(204).json({ message: "Order and associated Sale have been deleted" });
        } else {
            // Return an error response indicating that the order cannot be deleted
            res.status(403).json({ message: "Order cannot be deleted" });
        }
    } catch (error) {
        next(error);
    }
};




// Get a single order by ID
export const getOrderById = async (req, res, next) => {
    try {
        const { id, orderId } = req.params;
        // Find the order by orderId
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        next(error);
    }

};

// Get all orders
export const getAllOrders = async (req, res, next) => {
    try {
        // Get all orders from the database
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }

};

// Get orders by client user ID
export const getClientOrders = async (req, res, next) => {
    try {
        const { id } = req.params;
        // Find all orders associated with the client's ID
        const clientOrders = await Order.find({ userId: id });
        res.status(200).json(clientOrders);
    } catch (error) {
        next(error);
    }

};