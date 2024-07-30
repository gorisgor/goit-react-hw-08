import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {

    try {
        const response = await axios.post('/users/signup', newUser);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);   
    }
})

export const login = createAsyncThunk("auth/login", async (data,thunkAPI)=> {
    try {
        const response = await axios.post('/users/login', data);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);  
    }
})


export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      setAuthHeader("");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
