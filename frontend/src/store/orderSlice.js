import React from "react"
import { createSlice } from "@reduxjs/toolkit"
const orderSlice = createSlice({
    name:'order',
    initialState:{
        items:[],
        subTotal: 0,
    shipping: 0,
    total: 0,
    }
    ,
    reducers:{
        setOrderDetails: (state, action)=>{
            const { items , subTotal, shipping, total} = action.payload;
            state.items= items;
            state.subTotal=subTotal;
            state.shipping=shipping;
            state.total=total;

        },
    }
});

export const  {
    setOrderDetails
} = orderSlice.actions;
export default orderSlice.reducer;