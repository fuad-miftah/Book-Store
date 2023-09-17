import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const CartItemSchema = new Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
});

const ClientSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderHistory: {
        type: [String],
        ref: "Order"
    },
    wishList: {
        type: [String],
        ref: "Book"
    },
    cart: [CartItemSchema],

}, {
    timestamps: true,
})

export default model('Client', ClientSchema)