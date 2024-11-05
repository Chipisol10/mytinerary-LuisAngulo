import { createReducer } from "@reduxjs/toolkit";
import { fetchItineraries } from "../action/actionItineraries.js";

const initialState = {
    itinerary:[],
    loading:true,
    error:false,
}
export const reducerItineraries = createReducer(initialState, (builder)=>{
    builder.addCase(fetchItineraries.pending,(state)=>{
        state.loading = true
    })
    .addCase(fetchItineraries.fulfilled,(state,action)=>{
        state.loading = false
        state.itinerary = action.payload
    })
    .addCase(fetchItineraries.rejected,(state)=>{
        state.loading = false
        state.error = true
    })
    
})