import { createAsyncThunk, createSlice, Slice } from '@reduxjs/toolkit';
import { User } from '@types';
import { fetchUsersData } from './userAPI';

interface UserState {
  status: 'idle' | 'loading' | 'success' | 'error';
  users: User[];
  error?: string;
}

const name = 'user';

const initialState: UserState = {
  status: 'idle',
  users: [],
};

export const slice: Slice<UserState> = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'success';
        state.users = state.users.concat(action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => await fetchUsersData());

export const selectError = (state: { user: UserState }) => state.user.error;
export const selectStatus = (state: { user: UserState }) => state.user.status;
export const selectUsers = (state: { user: UserState }) => state.user.users;

export default slice.reducer;
