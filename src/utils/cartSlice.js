import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // takes configuration of slice

    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // reducer is an object and takes action items (reducer fun as addItems ...)
        // action items takes two parm state and action
        addItems: (state,action) => {
            state.items.push(action.payload)
        },
        reomveItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state, action) => {
            state.items.length = 0
        },
    },
});

export default cartSlice.reducer;

export const {addItems, reomveItem, clearCart} = cartSlice.actions;