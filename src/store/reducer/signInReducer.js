import { createReducer } from "@reduxjs/toolkit";
import { loginIN } from "../action/signIn";
import axios from "axios";

const initialState = {
    user:{},
    loading:false,
    error:false,
    token:""
} 


const loginReducer = createReducer(initialState,(builder)=>{
    builder.addCase(loginIN.pending, (state,action)=>{
        state.loading = true
        state.error = false
        state.user = {}
        state.token = ""
    })
    .addCase(loginIN.fulfilled, (state,action)=>{
        state.loading = false
        state.error = false
        state.user = action.payload.user
        state.token = action.payload.token
    })
    .addCase(loginIN.rejected,(state,action)=>{
        state.loading = true
        state.error = true
        state.user = {}
        state.token = ""
    })
})

export { loginReducer }