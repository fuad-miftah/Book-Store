import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["Client", "Retailer", "Admin"],
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
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
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
})

export default mongoose.model('User', UserSchema)