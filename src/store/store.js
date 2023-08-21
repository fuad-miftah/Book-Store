import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../userSlice";
import routeReducer from "../routeSlice";
import checkoutReducer from "../store/checkoutSlice";


export const store = configureStore({
  reducer: {
    user: loginReducer,
    route: routeReducer,
    checkout: checkoutReducer,
  },
});
