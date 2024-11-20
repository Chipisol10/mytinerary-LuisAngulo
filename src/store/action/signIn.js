// login

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginIN = createAsyncThunk("LOG_IN",async(user)=>{
   
    console.log("user",user);
    
    try {
        const userResponde = await axios.post('http://localhost:8080/api/auth/signIn',user)
        return userResponde.data
    } catch (error) {
        return(error)
    }
})

export { loginIN }