import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import usersService from 'services/users';

const usersAdapter = createEntityAdapter({});

const initialState = usersAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const { data } = await usersService.getAll();

  return data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        const users = action.payload;

        state.status = 'success';
        usersAdapter.upsertMany(state, users);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const { selectAll: selectUsers, selectById: selectUser } =
  usersAdapter.getSelectors((state) => state.users);
export const getUsersStatus = (state) => state.users.status;

export default usersSlice.reducer;
