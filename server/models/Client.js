import { Schema, model } from 'mongoose'
import User from './User'
import Book from './Book'

const ClientSchema = new Schema({
    userId: {
        type: String,
        ref: User,
        required: true,
    },
    orderHistory: {
        type: [String],
        ref: Order
    },
    wishList: {
        type: [String],
        ref: Book
    },
    cart: [{
        bookId: {
            type: String,
            ref: Book
        },
        quantity: Number,
        totalPrice: Number
    }],

}, {
    timestamps: true,
})

export default model('Client', ClientSchema)