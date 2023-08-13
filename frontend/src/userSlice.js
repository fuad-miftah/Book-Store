import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  users: [],
};

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logger: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
  },
});
export const { logger } = userSlice.actions;
export default userSlice.reducer;