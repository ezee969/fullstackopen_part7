import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loginService from 'services/login';

const initialState = {
  status: 'idle',
  user: { username: '', token: '', name: '' },
  error: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user.username = '';
      state.user.token = '';
      state.user.name = '';
    },
    clearStatus: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(logIn.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const userSession = action.payload;

        state.user = userSession;
        state.status = 'succeeded';
        window.localStorage.setItem('loggedUser', JSON.stringify(userSession));
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const setSession = (user) => {
  return async (dispatch) => {
    await dispatch(setUser(user));
  };
};

export const logIn = createAsyncThunk('session/logIn', async (loginData) => {
  const { username, password } = loginData;
  const userSession = await loginService.login({ username, password });

  return userSession;
});

export const signOut = () => {
  return async (dispatch) => {
    dispatch(clearUser());
    dispatch(clearStatus());

    window.localStorage.clear();
  };
};

export const selectUserSession = (state) => state.session.user;
export const getSessionStatus = (state) => state.session.status;
export const getSessionError = (state) => state.session.error;

export const { clearUser, setUser, clearStatus } = sessionSlice.actions;

export default sessionSlice.reducer;
