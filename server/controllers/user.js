import User from "../models/User.js";
import { createSuccess } from "../utils/success.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(createSuccess("User has been updated.", updatedUser));
  } catch (err) {
    next(err);
  }
}


export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json(createSuccess("User has been deleted."));
  } catch (err) {
    next(err);
  }
}


export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(createSuccess("User found.", user));
  } catch (err) {
    next(err);
  }
}


export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(createSuccess("Users found.", users));
  } catch (err) {
    next(err);
  }
}