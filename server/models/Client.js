import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

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
    cart: [{
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        },
        quantity: Number,
        totalPrice: Number
    }],

}, {
    timestamps: true,
})

export default model('Client', ClientSchema)