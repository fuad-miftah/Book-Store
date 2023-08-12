import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    user: loginReducer,
  },
});
