import User from "../models/User.js";
import Client from "../models/Client.js";
import Retailer from "../models/Retailer.js";
import bcrypt from "bcrypt";
import { createSuccess } from "../utils/success.js";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    const savedUser = await newUser.save();
    const { role } = req.body;

    if (role === 'Client') {
      const newClient = new Client({ userId: savedUser._id });
      await newClient.save();
    } else if (role === 'Retailer') {
      const newRetailer = new Retailer({ userId: savedUser._id });
      await newRetailer.save();
    }
    res.status(201).json(createSuccess("User has been created.", savedUser));
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    // Check if the JWT secret key is set correctly in your environment variables
    if (!process.env.JWT) {
      return next(createError(500, "JWT secret key is not configured."));
    }

    const access_token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT  // Use the JWT secret key from environment variables 
    );

    const { password, role, ...otherDetails } = user._doc;
    res
      .cookie("access_token", access_token, {
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: 'none',
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      })
      .status(200)
      .json(createSuccess("Login successful.", { details: { ...otherDetails }, role, access_token }));
  } catch (err) {
    next(err);
  }
};
