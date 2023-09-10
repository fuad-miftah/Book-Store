import { Schema, model } from 'mongoose'
import Retailer from './Retailer'
import Client from './Client'
import Order from './Order'
import Book from './Book'

const SalesSchema = new Schema({
    retailerId: {
        type: String,
        ref: Retailer,
        required: true,
    },
    bookId: {
        type: [String],
        ref: Book,
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
        type: String,
        ref: Client,
        required: true
    },
    orderId: {
        type: String,
        ref: Order,
        required: true
    }
}, {
    timestamps: true,
})

export default model('Sales', SalesSchema)