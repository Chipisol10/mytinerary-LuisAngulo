import { createReducer } from "@reduxjs/toolkit";
import { login, setUser, logout } from "../action/signIn";

const initialState = {
  loading: false,
  error: false,
  user: null,
  token: null,
  loggedIn: localStorage.getItem("loggedIn") === "true"
};

const authReducer = createReducer(initialState, (builder) => {

  builder.addCase(login.fulfilled, (state, action) => {
    console.log("Se ejecuto correctamente");
    console.log(action);
    state.loading = false,
    state.error = false,
    state.user = action.payload.user,
    state.token = action.payload.token,
    state.loggedIn = true,
    localStorage.setItem("loggedIn", "true")
  })
    .addCase(login.pending, (state, action) => {
      console.log("Se inicio sign in");
      console.log(action);
      state.loading = true,
      state.error = false,
      state.user = null,
      state.token = null
     
    })
    .addCase(login.rejected, (state, action) => {
      console.log("Error en el sign in");
      localStorage.removeItem("token");
      state.loading = false,
      state.error = action.error.message,
      state.user = null,
      state.token = null
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload.user,
      state.token = action.payload.token
    })

    .addCase(logout, (state, action) => {
      localStorage.removeItem("token");
      localStorage.setItem("loggedIn", "false"); 
      state.user = null;
      state.token = null;
      state.loggedIn = false; 
    })
    
});

export default authReducer
