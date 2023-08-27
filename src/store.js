import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./userSlice";
import bookSlice from "./store/bookSlice";
import cartSlice from "./store/cartSlice";
export const store = configureStore({
  reducer: {
    user: loginReducer,
    books: bookSlice,
    cart: cartSlice
  },
});
