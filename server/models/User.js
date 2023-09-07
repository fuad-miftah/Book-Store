const mongoose = require('mongoose')
const Role = require('./Role')
var SchemaTypes = mongoose.Schema.Types

const UserSchema = new mongoose.Schema({
    roleId: {
        type: String,
        ref:Role,
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
    email: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('users', UserSchema)