import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

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
    builder.addCase(register.pending, (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.isLoading = true;
      state.isError = false;
    }).addCase(register.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    }).addCase(register.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    }).addCase(login.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    }).addCase(login.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    }).addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    }).addCase(logout.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    }).addCase(logout.fulfilled, (state)=>{
      state.isLoading = false;
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    }).addCase(logout.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    }).addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })
    .addCase(refreshUser.rejected, (state) => {
      state.isRefreshing = false;
    })
  },
})
export default authSlice.reducer;