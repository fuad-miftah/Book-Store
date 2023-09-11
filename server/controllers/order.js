import Order from '../models/Order.js';

// Create a new order
export const createOrder = async (req, res, next) => {
    try {
        const { userId, bookIds, address, postalCode, totalPrice } = req.body;

        // Validate input data

        const newOrder = new Order({
            userId,
            bookId: bookIds, // Assuming bookIds is an array of book IDs
            address,
            postalCode,
            orderStatus: 'Processing', // Default status when creating an order
            totalPrice,
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        next(error);
    }
};

// Update the order status
export const updateOrderStatus = async (req, res, next) => {
    try {
        const { orderId } = req.params;
        const { orderStatus } = req.body;

        // Validate input data and check if orderStatus is a valid value

        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { $set: { orderStatus } },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(updatedOrder);
    } catch (error) {
        next(error);
    }
};

// Get a single order by ID
export const getOrderById = async (req, res, next) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
};

// Get all orders
export const getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};

// Get orders by client user ID
export const getClientOrders = async (req, res, next) => {
    try {
        const { clientId } = req.params;

        // Find orders where the userId matches the client's user ID
        const orders = await Order.find({ userId: clientId });

        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};