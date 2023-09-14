import { createSlice } from "@reduxjs/toolkit";

// Define a function to initialize the cart from local storage
const initializeCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
};

const initialState = initializeCartFromLocalStorage();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            const { bookId, price, totalPrice, quantity, coverImg, title } = action.payload;

            // Check if the book is already in the cart
            const existingBookIndex = state.findIndex((book) => book.bookId === bookId);

            if (existingBookIndex !== -1) {
                // If the book is already in the cart, update its quantity and total price
                state[existingBookIndex].quantity += quantity;
                state[existingBookIndex].totalPrice += totalPrice;
            } else {
                // If the book is not in the cart, add it
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
            localStorage.setItem("cart", JSON.stringify(state));
        },
        remove: (state, action) => {
            // Remove the book from the cart based on bookId
            const bookIdToRemove = action.payload;
            const updatedCart = state.filter((book) => book.bookId !== bookIdToRemove);
            state.splice(0, state.length, ...updatedCart); // Clear and replace the cart state
            // Update local storage
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
