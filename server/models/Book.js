import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    genre: {
        type: String,
        required: true,
    },
    retailerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Retailer",
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    rating: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        rating: Number,
        review: String
    }],
    coverImg: {
        type: String,
        required: true,
    },
    no_of_page: {
        type: Number,
    },
    sellCount: {
        type: Number,
        default: 0, // Default value set to 0
    },

}, {
    timestamps: true,
})

export default model("Book", BookSchema);