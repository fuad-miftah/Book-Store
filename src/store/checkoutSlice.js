    import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        firstName: '',
        lastName: '',
        country: '',
        streetAddress: '',
        townCity: '',
        state: '',
        postcode: '',
        phoneNumber: '',
        emailAddress: '',
        createAccount: false,
    }
    const checkoutSlice = createSlice({
        name: 'checkout',
        initialState,
        reducers: {
            updateField: (state, action )=>{
const {field,  value} = action.payload;
state[field]=value;
            },
            toggleCreateAccount:  (state) =>{
state.createAccount = !state.createAccount;
            },
            updateOrderNotes: (state, action) => {
                state.orderNotes = action.payload;
              },
        }
    });


    export const { updateField, toggleCreateAccount, updateOrderNotes } = checkoutSlice.actions;
    export default checkoutSlice.reducer;


