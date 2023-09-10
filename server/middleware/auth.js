import { findOne } from "../models/User";

import { sign, verify } from "jsonwebtoken";

const generateToken = (req, res, next) => {
    let data = req.body;
    req.token = sign(
        {
            email: data.email,
        },
        process.env.TOKEN_KEY
    );

    next();
};


const protect = async (req, res, next) => {
    let token
    let decoded
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1]
            // Verify token
            decoded = verify(token, process.env.TOKEN_KEY)
            // Get user from the token
            req.user = await findOne({ email: decoded.email })
            if (decoded.role == 'admin') {
                next()
            } else {
                res.status(401).json({ message: "You are not authenticated.", })
            }
        } catch (error) {
            res.status(401).json({
                message: "You are not authenticated.",
            })
        }
    }

    if (!token) {
        res.status(401).json({
            message: "Not authorized, no token"
        })
    }
}

const adminProtect = async (req, res, next) => {
    let token
    let decoded
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1]
            // Verify token
            decoded = verify(token, process.env.TOKEN_KEY)
            // Get user from the token
            req.user = await findOne({ email: decoded.email })
            next()
        } catch (error) {
            res.status(401).json({
                message: "User is not authenticated.",
            })
        }
    }

    if (!token) {
        res.status(401).json({
            message: "Not authorized, no token"
        })
    }
}
export default { generateToken, protect };