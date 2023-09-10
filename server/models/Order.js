import { Schema, model } from 'mongoose'
import Book from './Book'
import User from './User'

const OrderSchema = new Schema({
    userId: {
        type: String,
        ref: User,
        required: true,
    },
    bookId: {
        type: [String],
        ref: Book,
        required: true,
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
        required: true
    },
    totalPrice: {
        type: Number,
    },

}, {
    timestamps: true,
})

export default model('Order', OrderSchema)