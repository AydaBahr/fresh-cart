import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getCategories= createAsyncThunk('CategoriesSlice/Categories', async()=>{
   let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
//    console.log(data.data);
   return data.data
})
const initialState={categories:[],loading:false,isError:null }

const CategoriesSlice=createSlice({
name:'categories',
initialState,
// extraReducers:{
//    [getCategories.pending]:(state,action)=>{
//     state.loading=true
// },
// [getCategories.fulfilled]:(state,action)=>{
   //     state.categories =action.payload
   //     state.loading=false
   //    },
   // [getCategories.rejected]:(state,action)=>{
      //     state.isError=action.payload
      //     state.loading=false
      //    }
      // } 
      extraReducers:(builder)=>{
         builder.addCase(getCategories.fulfilled,(state,action)=>{
            state.loading=false
            state.categories =action.payload

   })
   .addCase(getCategories.pending,(state)=>{
      state.loading=true
   })


}
 });

export let CategoriesReducer =CategoriesSlice.reducer;