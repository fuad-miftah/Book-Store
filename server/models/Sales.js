import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const SalesSchema = new Schema({
    retailerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Retailer",
        required: true,
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true
    },
    paymentReceived: {
        type: Boolean,
        required: true,
        default: false
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