import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/config/axios';

export interface User {
    id: string;
    name: string;
    email: string;
    created: string;
    role: string;
    status: boolean;
}

export interface UserDetailsState {
    users: User[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: UserDetailsState = {
    users: [
        {
            id: '1',
            name: 'Hemant kumar',
            email: 'hemant@gmail.com',
            created: '2024-08-18',
            role: 'Admin',
            status: true,
          },
          {
            id: '2',
            name: 'anything',
            email: 'abc@gmail.com',
            created: '2024-08-18',
            role: 'User',
            status: false,
          },
        
    ],
    status: 'idle',
    error: null,
};

// Fetch all users
export const fetchAllUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
    'userDetails/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/users');
            return response.data;
        } catch (error: any) {
            return rejectWithValue('Failed to fetch users');
        }
    }
);

// Toggle user status
export const toggleUserStatus = createAsyncThunk(
    'userDetails/toggleStatus',
    async ({ userId, status }: { userId: string; status: boolean }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.patch(`/users/${userId}/status`, { status });
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error.response?.data || 'Failed to toggle status');
        }
    }
);

// Edit user details
export const editUserDetails = createAsyncThunk(
    'userDetails/editUser',
    async ({ userId, userDetails }: { userId: string; userDetails: Partial<User> }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.put(`/users/${userId}`, userDetails);
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error.response?.data || 'Failed to edit user');
        }
    }
);

// Delete user
export const deleteUser = createAsyncThunk(
    'userDetails/deleteUser',
    async (userId: string, { rejectWithValue }) => {
        try {
            await axiosInstance.delete(`/users/${userId}`);
            return userId;
        } catch (error:any) {
            return rejectWithValue(error.response?.data || 'Failed to delete user');
        }
    }
);
export const addUser = createAsyncThunk(
    'userDetails/addUser',
    async (newUser:any, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/users', newUser);
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error.response?.data || 'Failed to add user');
        }
    }
);

const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(toggleUserStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(toggleUserStatus.fulfilled, (state, action) => {
                const updatedUser = action.payload;
                const index = state.users.findIndex(user => user.id === updatedUser.id);
                if (index !== -1) {
                    state.users[index].status = updatedUser.status;
                }
                state.status = 'succeeded';
            })
            .addCase(toggleUserStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(editUserDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(editUserDetails.fulfilled, (state, action) => {
                const updatedUser = action.payload;
                const index = state.users.findIndex(user => user.id === updatedUser.id);
                if (index !== -1) {
                    state.users[index] = updatedUser;
                }
                state.status = 'succeeded';
            })
            .addCase(editUserDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(deleteUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload);
                state.status = 'succeeded';
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(addUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
                state.status = 'succeeded';
            })
            .addCase(addUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
});

export default userDetailsSlice.reducer;
