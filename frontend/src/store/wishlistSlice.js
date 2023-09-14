import { createSlice } from "@reduxjs/toolkit";

// Define a function to initialize the wishlist from local storage
const initializewishlistFromLocalStorage = () => {
    const wishlistData = localStorage.getItem("wishlist");
    return wishlistData ? JSON.parse(wishlistData) : [];
};

const initialState = initializewishlistFromLocalStorage();

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const { bookId, price, totalPrice, quantity, coverImg, title } = action.payload;

            // Check if the book is already in the wishlist
            const existingBookIndex = state.findIndex((book) => book.bookId === bookId);

            if (existingBookIndex !== -1) {
                // If the book is already in the wishlist, update its quantity and total price
                state[existingBookIndex].quantity += quantity;
                state[existingBookIndex].totalPrice += totalPrice;
            } else {
                // If the book is not in the wishlist, add it
                state.push({
                    bookId,
                    price,
                    totalPrice,
                    quantity,
                    coverImg,
                    title,
                });
            }

            // Update local storage
            localStorage.setItem("wishlist", JSON.stringify(state));
        },
        removeFromWishlist: (state, action) => {
            // Remove the book from the wishlist based on bookId
            const bookIdToRemove = action.payload;
            const updatedwishlist = state.filter((book) => book.bookId !== bookIdToRemove);
            state.splice(0, state.length, ...updatedwishlist); // Clear and replace the wishlist state
            // Update local storage
            localStorage.setItem("wishlist", JSON.stringify(updatedwishlist));
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
