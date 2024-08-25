// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../../services/api';
// import { useAxios } from '@/hooks/useAxios';

// import { axiosInstance } from '@/config/axios'
import { axiosInstance } from '@/config/axios';

interface user {
    name:string,
    email:string,
    password:string
}
export interface userState{
    user:user | null;
    status:'idle' | 'loading' | 'succeeded' | 'failed';
    error:string
}

export const fetchUserById = createAsyncThunk(
  'user/fetchById',
  async (userId:string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/users/${userId}`,{userId});
      return response.data;
    } catch (error:any) {

      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const login = createAsyncThunk(
    'user/login',
    async (credentials: { email: string; password: string }, { rejectWithValue }) => {
      try {
        console.log("inside try");

         const response = await axiosInstance.post('/auth/login', credentials);
        return response.data;
      } catch (error: any) {
        console.log("inside catch");
        
        return rejectWithValue(error.response?.data || 'Login failed');
      }
    }
  );
export const signup =createAsyncThunk(
    'user/signup',
    async(credentials:{name:string;email:string,password:string},{rejectWithValue})=>{
        try{
            const response =await axiosInstance.post('/auth/signup',credentials);
            return response.data;
        }
        catch(error:any){
          return rejectWithValue(error.rsponse?.data || 'Login failed');
        }
    }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: '',
  }as userState,
  reducers: {
    resetUser: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {

        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state, action) => {
        
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
  },
});

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
