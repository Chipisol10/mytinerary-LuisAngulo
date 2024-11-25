import { createReducer } from "@reduxjs/toolkit";
import { signUpRegister } from "../action/signUp";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authUpReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signUpRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(signUpRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(signUpRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
});

export default authUpReducer;