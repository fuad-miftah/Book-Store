import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";

const initialState = {
    data: [],
    status: StatusCode.IDLE
}

const singleBookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBook.pending, (state, action) => {
                state.status = StatusCode.LOADING;
            })
            .addCase(getBook.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = StatusCode.IDLE;
            })
            .addCase(getBook.rejected, (state, action) => {
                state.status = StatusCode.ERROR;
            })
    }
});

export const { fetchBooks } = singleBookSlice.actions;
export default singleBookSlice.reducer;


export const getBook = createAsyncThunk('products/get/book', async (id) => {
    console.log(id);
    const url = 'https://fakestoreapi.com/products/' + id
    console.log(url);
    const data = await fetch(url)
    const res = data.json();
    return res;
})
