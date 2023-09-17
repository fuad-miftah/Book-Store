import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const CartSchema = new mongoose.Schema({
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

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;