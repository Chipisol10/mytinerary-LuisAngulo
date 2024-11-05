import { configureStore } from "@reduxjs/toolkit";
import { reducerCity } from "./reducer/reducerCity.js";
import { reducerItineraries } from "./reducer/reducerItineraries.js";

export const store = configureStore({ 
    reducer: {reducerCities:reducerCity,reducerItineraries:reducerItineraries}
})