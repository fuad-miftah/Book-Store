import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const SalesSchema = new Schema({
    retailerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Retailer",
        required: true,
    },
    bookId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Book",
        required: true,
    },
    saleDate: {
        type: Date
    },
    coverImg: {
        type: String,
        required: true,
    },
    quantitySold: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    paymentReceived: {
        type: Boolean,
        required: true
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
        required: true
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    }
}, {
    timestamps: true,
})

export default model('Sales', SalesSchema)