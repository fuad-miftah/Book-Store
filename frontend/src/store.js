import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./userSlice";
import bookSlice from "./store/bookSlice";
import cartSlice from "./store/cartSlice";
import wishlistSlice from "./store/wishlistSlice";
import authSlice from "./store/authSlice";
import authapiSlice from "./store/authapiSlice";
import filterSlice from "./store/filterSlice";
import paginationReducer from "./store/paginationSlice";
import checkoutReducer from "./store/checkoutSlice";
import orerReducer from "./store/orderSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    auth: authSlice,
    authapi: authapiSlice,
    user: loginReducer,
    books: bookSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    checkout: checkoutReducer,
    pagination: paginationReducer,
    order : orerReducer,

  },
  devTools: true,
});
