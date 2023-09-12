import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./userSlice";
import bookSlice from "./store/bookSlice";
import cartSlice from "./store/cartSlice";
import authSlice from "./store/authSlice";
import authapiSlice from "./store/authapiSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    authapi: authapiSlice,
    user: loginReducer,
    books: bookSlice,
    cart: cartSlice
  },
  devTools: true,
});
