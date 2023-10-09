import { createSlice } from "@reduxjs/toolkit";

const initialState={
    counter:0
} 
const counterSlice =createSlice({
name:"counter",
initialState,
reducers:{
    increase:(state)=>{
    state.counter += 1;
    },
    increaseByAmount:(state,action)=>{
    state.counter += action.payload;
    }
}
})

export const counterReducer= counterSlice.reducer
export const {increase, increaseByAmount}=counterSlice.actions