import { createSlice } from '@reduxjs/toolkit';

const favoriteBooksSlice = createSlice({
  name: 'favoriteBooks',
  initialState: { books: [] },
  reducers: {
    addToFavorites: (state, action) => {
      state.books.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteBooksSlice.actions;
export default favoriteBooksSlice.reducer;