import Sales from '../models/Sales.js';
import Retailer from '../models/Retailer.js';

// Update a sale by ID
export const updateSale = async (req, res, next) => {
    try {
        const { id, saleId } = req.params;
        // Find the sale by saleId and update its details
        const updatedSale = await Sales.findByIdAndUpdate(saleId, req.body, { new: true });
        res.status(200).json(updatedSale);
    } catch (error) {
        next(error);
    }

};

// Get a single sale by ID
export const getSaleById = async (req, res, next) => {
    try {
        const { id, saleId } = req.params;
        // Find the sale by saleId
        const sale = await Sales.findById(saleId);
        if (!sale) {
            return res.status(404).json({ message: "Sale not found" });
        }
        res.status(200).json(sale);
    } catch (error) {
        next(error);
    }

};

// Get all sales
export const getAllSales = async (req, res, next) => {
    try {
        // Get all sales from the database
        const sales = await Sales.find();
        res.status(200).json(sales);
    } catch (error) {
        next(error);
    }

};

// Get sales by retailer ID
export const getRetailerSales = async (req, res, next) => {
    try {
        const { id } = req.params;
        const retailer = await Retailer.findOne({ userId: id });

        // Find all sales associated with the retailer's ID

        const retailerSales = await Sales.find({ retailerId: retailer._id });
        res.status(200).json(retailerSales);
    } catch (error) {
        next(error);
    }

};
