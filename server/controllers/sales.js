import Sales from '../models/Sales.js';
import Retailer from '../models/Retailer.js';
import { createSuccess } from '../utils/success.js';
import { createError } from '../utils/error.js';

// Update a sale by ID
export const updateSale = async (req, res, next) => {
    try {
        const { id, saleId } = req.params;
        const retailer = await Retailer.findOne({ userId: id });
        if (!retailer) {
            return res.status(404).json(createError(404, "Retailer not found."));
        }
        // Find the sale by saleId
        const sale = await Sales.findById(saleId);
        if (!sale) {
            return res.status(404).json(createError(404, "Sale not found."));
        }
        // authenticate retailer
        if (!retailer._id.equals(sale.retailerId)) {
            return res.status(401).json(createError(401, "Unauthorized."));
        }
        // Find the sale by saleId and update its details
        const updatedSale = await Sales.findByIdAndUpdate(saleId, req.body, { new: true });
        res.status(200).json(createSuccess("Sale has been updated.", updatedSale));
    } catch (error) {
        next(error);
    }

};

// Get a single sale by ID
export const getSaleById = async (req, res, next) => {
    try {
        const { id, saleId } = req.params;
        // check if retailer exists
        const retailer = await Retailer.findOne({ userId: id });
        if (!retailer) {
            return res.status(404).json(createError(404, "Retailer not found."));
        }

        // Find the sale by saleId
        const sale = await Sales.findById(saleId);
        if (!sale) {
            return res.status(404).json(createError(404, "Sale not found."));
        }
        // authenticate retailer
        if (!retailer._id.equals(sale.retailerId)) {
            return res.status(401).json(createError(401, "Unauthorized."));
        }
        res.status(200).json(createSuccess("Sale has been retrieved.", sale));
    } catch (error) {
        next(error);
    }

};

// Get all sales
export const getAllSales = async (req, res, next) => {
    try {
        // Get all sales from the database
        const sales = await Sales.find();
        res.status(200).json(createSuccess("Sales have been retrieved.", sales));
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
        res.status(200).json(createSuccess("Sales have been retrieved.", retailerSales));
    } catch (error) {
        next(error);
    }

};
