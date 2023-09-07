import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";

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
                state.featuredData = action.payload.slice(0, 8);
                state.bestSellerData = action.payload.slice(0, 8);
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
    const data = await fetch('https://fakestoreapi.com/products')
    const res = data.json();
    return res;
})
