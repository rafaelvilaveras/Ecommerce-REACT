import { createSlice } from "@reduxjs/toolkit";

export const selectorSlice = createSlice({
    name: 'selectorR',
    initialState: {value:{ lightbox: 0, num: 0, aux: 0, lenght: 0, operator: '' }},
    reducers: {
        moveSel: (state, action) => {
            if(state.value.lightbox === 0){
                if(action.payload.operator !== '-'){
                    state.value.num < action.payload.length-1 ? state.value.num++ : state.value.num = 0 
                }else{
                    state.value.num !== 0 ? state.value.num-- : state.value.num = action.payload.length-1
    
                }
    
            }else if(action.payload.operator !== '-'){
                state.value.aux < action.payload.length-1 ? state.value.aux++ : state.value.aux = 0 
            }else{
                state.value.aux !== 0 ? state.value.aux-- : state.value.aux = action.payload.length-1

            }

        },
        toggleLb: (state, action) => {
            if(state.value.lightbox === 0){
                state.value.lightbox = 1
                state.value.aux = state.value.num
            }else{
            state.value.lightbox = 0

            }
        },
        changeByIndex: (state, action) => {
            state.value.lightbox === 0 ? state.value.num = action.payload : state.value.aux = action.payload
        }
    }
})

export const {moveSel} = selectorSlice.actions;
export const {toggleLb} = selectorSlice.actions;
export const {changeByIndex} = selectorSlice.actions;

export default selectorSlice.reducer;