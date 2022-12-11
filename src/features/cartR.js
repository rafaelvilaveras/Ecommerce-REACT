import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cartR",
    initialState: { value: { cart: 0, qnt: 0 } },
    reducers: {
        addCart: (state, action) => {
            state.value.cart = state.value.cart + state.value.qnt
            state.value.qnt = 0
        },
        changeQnt: (state, action) => {
            if(state.value.qnt !== 0 || action.payload !== '-'){
                action.payload === '+' ? state.value.qnt++ : state.value.qnt-- 
            }
            
        },
        checkCart: (state, action) => {
            state.value.cart = 0
        },
        removeItem: (state, action) => {
            if(state.value.cart != 0) {
                state.value.cart--
            }
        }
    }
});

export const {addCart} = cartSlice.actions;
export const {changeQnt} = cartSlice.actions;
export const {checkCart} = cartSlice.actions;
export const {removeItem} = cartSlice.actions;


export default cartSlice.reducer;