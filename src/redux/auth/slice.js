import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./operations";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false, 
    isError: false, 
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.isLoading = true;
      state.isError = false;
    }).addCase(register.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    }).addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    }).addCase(login.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    }).addCase(login.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    }).addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    }).addCase(logout.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    }).addCase(logout.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    }).addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    })
  },
})
export default authSlice.reducer;