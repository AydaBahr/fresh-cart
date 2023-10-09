import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export let getBrands = createAsyncThunk('brandsSlice/brands',async()=>{
    let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
    return data.data
})

let initialState ={brands:[], loading:false}
let brandsSlice =createSlice({

    name:'brands',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getBrands.fulfilled,(state,action)=>{
            state.loading=false
            state.brands =action.payload

   })
   .addCase(getBrands.pending,(state)=>{
      state.loading=true
   })    }
})
export let brandReducer= brandsSlice.reducer