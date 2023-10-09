import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../Counter/CounterSlice";
import { CategoriesReducer } from "../Categories/CategoriesSlice";
import { brandReducer } from "../Brands/BrandsSlice";

export const store =configureStore({
    reducer:{
        counterReducer:  counterReducer,
        CategoriesReducer:  CategoriesReducer,
        brandReducer:brandReducer

    }

})