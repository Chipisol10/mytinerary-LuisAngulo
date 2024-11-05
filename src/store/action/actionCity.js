import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCities = createAsyncThunk(
    'SET_CITY',
    async (searchQuery) => {
        searchQuery = searchQuery ? searchQuery : ""
      const response = await axios.get(`http://localhost:8080/api/cities/all?name=${searchQuery}`);
     return response.data.response || [];
    }
  );

  export const search = createAction("SEARCH")