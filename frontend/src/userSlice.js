import { createSlice } from "@reduxjs/toolkit";
const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
const initialState = {
  name: "",
  users: storedUsers,
};

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logger: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    signup: (state, action) => {
      const newUser = {
        id: new Date().getTime().toString(), // Generate unique ID
        email: action.payload.email,
        name: action.payload.name,
        password: action.payload.password,
      };
      state.users = [...state.users, newUser];
    },
  },
});
export const { logger, signup } = userSlice.actions;
export default userSlice.reducer;
