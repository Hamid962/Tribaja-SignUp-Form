// const API = "https://api.staging.tribaja.co/api/";

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchData = createAsyncThunk("user/fetchData", async () => {
//   try {
//     const res = await axios.post(`${API}accounts/register/`);

//     console.log(res);
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// });

// const initialState = {
//   isLoading: false,
//   data: null,
//   error: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.data = action.payload;
//         state.error = null;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default userSlice.reducer;
// userSlice.js

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
