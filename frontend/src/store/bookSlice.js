import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";
import { routedb } from "../constants";

const initialState = {
    data: [],
    featuredData: [],
    bestSellerData: [],
    status: StatusCode.IDLE,
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBooks.pending, (state, action) => {
                state.status = StatusCode.LOADING;
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.data = action.payload;
                state.featuredData = action.payload.filter(item => item.featured === true).slice(0, 8);
                state.bestSellerData = action.payload.slice().sort((a, b) => b.sellCount - a.sellCount).slice(0, 8);
                state.status = StatusCode.IDLE;
            })
            .addCase(getBooks.rejected, (state, action) => {
                state.status = StatusCode.ERROR;
            })
    }
});

export const { fetchBooks } = bookSlice.actions;
export default bookSlice.reducer;

export const getBooks = createAsyncThunk("products/get", async () => {
    console.log("entered");
    const res = await axios.get(`${routedb}/book`);
    console.log(res.data.data);
    return res.data.data;
})

