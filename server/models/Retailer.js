import { Schema, model } from 'mongoose'
import User from './User'
import Book from './Book'


const RetailerSchema = new Schema({
    userId: {
        type: String,
        ref: User,
        required: true,
    },
    listedBooks: [{
        bookId: {
            type: String,
            ref: Book
        },
        quantity: Number,
        price: Number
    }],
    saleHistory: {
        type: [String],
        ref: Sale
    },

}, {
    timestamps: true,
})

export default model('Retailer', RetailerSchema)