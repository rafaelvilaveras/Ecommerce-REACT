import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name: 'toggleR',
    initialState: {value: { cartbar: 0, routesbar: 0, teste: 'div-teste' }},
    reducers: {
        toggleOption: (state, actions) => {
            const option = actions.payload
            state.value[option] === 0 ? state.value[option] = 1 : state.value[option] = 0
            
        },
    }
})

export const {toggleOption} = toggleSlice.actions;
export const {updateDimension} = toggleSlice.actions;

export default toggleSlice.reducer;