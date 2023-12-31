import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {

    const token = req.cookies.access_token;
    if (!token) {
        console.log("verifyToken: no token");
        return next(createError(401, "You are not authenticated!"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next();
    });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        console.log(req.user)
        if (req.user.id === req.params.id || req.user.role == "Admin") {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};

export const verifyClient = (req, res, next) => {
    verifyToken(req, res, () => {
        if ((req.user.id === req.params.id && req.user.role == "Client") || req.user.role == "Admin") {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};

export const verifyRetailer = (req, res, next) => {

    try {
        verifyToken(req, res, () => {
            console.log("authUser", req.user);
            if ((req.user.role == "Retailer") || req.user.role == "Admin") {
                console.log("verifyRetailer: verified");
                next();
            } else {
                return next(createError(403, "You are not authorized!"));
            }
        });
    } catch (err) {
        next(createError(403, "unkown id"))
        console.log(err);
    }
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.role == "Admin") {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};
