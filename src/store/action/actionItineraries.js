import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItineraries = createAsyncThunk(
    'SET_ITINERARIES',
    async (cityId) => {
      try {
        console.log('Fetching itineraries for cityId:', cityId);
        const response = await axios.get(`http://localhost:8080/api/itineraries/city/${cityId}`);
        console.log('API Response:', response.data);
        return response.data.response || [];
      } catch (error) {
        console.error('Error fetching itineraries:', error);
        throw error;
      }
    }
  );