import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["Client", "Retailer", "Admin"],
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
})

export default mongoose.model('User', UserSchema)