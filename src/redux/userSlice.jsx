import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://api.staging.tribaja.co/api/";

export const postData = createAsyncThunk("user/postData", async (formData) => {
  try {
    const res = await axios.post(`${API}accounts/register/`, formData);
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("Error posting data:", error);
    return error.response;
  }
});

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(postData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
