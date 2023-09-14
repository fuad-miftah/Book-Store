// filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategories: [], // Store selected categories here
    selectedBrands: [], // Store selected brands here
    minPrice: "",
    maxPrice: "",
    isAvailable: false,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggleCategory: (state, action) => {
            const category = action.payload;
            if (state.selectedCategories.includes(category)) {
                // If the category is already selected, remove it
                state.selectedCategories = state.selectedCategories.filter(
                    (item) => item !== category
                );
            } else {
                // If the category is not selected, add it
                state.selectedCategories.push(category);
            }
        },
        toggleBrand: (state, action) => {
            const brand = action.payload;
            if (state.selectedBrands.includes(brand)) {
                // If the brand is already selected, remove it
                state.selectedBrands = state.selectedBrands.filter(
                    (item) => item !== brand
                );
            } else {
                // If the brand is not selected, add it
                state.selectedBrands.push(brand);
            }
        },
        setMinPrice: (state, action) => {
            state.minPrice = action.payload;
        },
        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
        },
        toggleIsAvailable: (state) => {
            state.isAvailable = !state.isAvailable; // Toggle the isAvailable property
        },
    },
});

export const {
    toggleCategory,
    toggleBrand,
    setMinPrice,
    setMaxPrice,
    toggleIsAvailable,
} = filterSlice.actions;

export default filterSlice.reducer;
