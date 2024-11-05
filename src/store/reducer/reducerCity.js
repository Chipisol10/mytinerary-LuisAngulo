import { createReducer } from "@reduxjs/toolkit";
import { fetchCities, search } from "../action/actionCity.js";

const initialState = {
    cities:[],
    loading:true,
    error:false,
    searchQuery:""
}
export const reducerCity = createReducer(initialState, (builder)=>{
    builder.addCase(fetchCities.pending,(state)=>{
        state.loading = true
    })
    .addCase(fetchCities.fulfilled,(state,action)=>{
        state.loading = false
        state.cities = action.payload
    })
    .addCase(fetchCities.rejected,(state)=>{
        state.loading = false
        state.error = true
    })
    .addCase(search,(state,action)=>{
        state.searchQuery = action.payload
    })
})