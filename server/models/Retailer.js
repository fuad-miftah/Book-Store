import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const RetailerSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    listedBooks: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Book",
    },
    saleHistory: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Sale"
    },

}, {
    timestamps: true,
})

export default model('Retailer', RetailerSchema);
