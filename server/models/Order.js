import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ["Processing", "Shipped", "Delivered"],
        required: true,
        default: "Processing"
    },
    totalPrice: {
        type: Number,
        required: true
    },

}, {
    timestamps: true,
})

export default model('Order', OrderSchema)