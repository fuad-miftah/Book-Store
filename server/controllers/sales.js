import Sales from '../models/Sales.js';

// Create a new sale
export const createSale = async (req, res, next) => {
    try {
        const {
            retailerId,
            bookIds,
            saleDate,
            coverImg,
            quantitySold,
            totalAmount,
            paymentReceived,
            clientId,
            orderId,
        } = req.body;

        // Validate input data

        const newSale = new Sales({
            retailerId,
            bookId: bookIds, // Assuming bookIds is an array of book IDs
            saleDate,
            coverImg,
            quantitySold,
            totalAmount,
            paymentReceived,
            clientId,
            orderId,
        });

        const savedSale = await newSale.save();
        res.status(201).json(savedSale);
    } catch (error) {
        next(error);
    }
};

// Update a sale by ID
export const updateSale = async (req, res, next) => {
    try {
        const { saleId } = req.params;
        const { paymentReceived } = req.body;

        // Validate input data

        const updatedSale = await Sales.findByIdAndUpdate(
            saleId,
            { $set: { paymentReceived } },
            { new: true }
        );

        if (!updatedSale) {
            return res.status(404).json({ message: 'Sale not found' });
        }

        res.status(200).json(updatedSale);
    } catch (error) {
        next(error);
    }
};

// Get a single sale by ID
export const getSaleById = async (req, res, next) => {
    try {
        const { saleId } = req.params;
        const sale = await Sales.findById(saleId);

        if (!sale) {
            return res.status(404).json({ message: 'Sale not found' });
        }

        res.status(200).json(sale);
    } catch (error) {
        next(error);
    }
};

// Get all sales
export const getAllSales = async (req, res, next) => {
    try {
        const sales = await Sales.find();
        res.status(200).json(sales);
    } catch (error) {
        next(error);
    }
};

// Get sales by retailer ID
export const getRetailerSales = async (req, res, next) => {
    try {
        const { retailerId } = req.params;

        // Find sales where the retailerId matches the retailer's ID
        const sales = await Sales.find({ retailerId });

        res.status(200).json(sales);
    } catch (error) {
        next(error);
    }
};
