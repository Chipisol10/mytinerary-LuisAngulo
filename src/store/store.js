import { configureStore } from "@reduxjs/toolkit";
import { reducerCity } from "./reducer/reducerCity.js";
import { reducerItineraries } from "./reducer/reducerItineraries.js";
import authReducer from "./reducer/signInReducer.js";
import authUpReducer from "./reducer/signUpReducer.js";

export const store = configureStore({
  reducer: {
    reducerCities: reducerCity,
    reducerItineraries: reducerItineraries,
    auth: authReducer,
    signUp: authUpReducer,
  },
});