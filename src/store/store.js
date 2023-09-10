import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import singleBookSlice from "./singleBookSlice";
import checkoutReducer from "../store/checkoutSlice";
import cartSlice from "./cartSlice";
import authReducer from "./authSlice";
import favoriteBooksReducer from "./favoriteBooksSlice";
import paginationReducer from "./paginationSlice";


export const store = configureStore({
  reducer: {
    books: bookSlice,
    singleBook: singleBookSlice,
    cart: cartSlice,
    checkout: checkoutReducer,
    auth: authReducer,
    favoriteBooks: favoriteBooksReducer,    
    pagination: paginationReducer,
  },
});
