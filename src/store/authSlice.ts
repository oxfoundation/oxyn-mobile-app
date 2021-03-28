import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './configuration';

interface AuthType {
  isAuthenticated: boolean;
  token: string | undefined;
}

const initialState: AuthType = {
  isAuthenticated: true,
  token: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = undefined;
    },
  },
});

// Selectors
const token = (state: RootState) => state.auth.token;
const isAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export const auth = {
  action: authSlice.actions,
  get: {
    token,
    isAuthenticated,
  },
};
