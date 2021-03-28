import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './configuration';

interface CounterStateType {
  value: number;
}

const initialState: CounterStateType = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Selectors
const count = (state: RootState) => state.counter.value;

export const counter = {
  action: counterSlice.actions,
  get: {
    count,
  },
};
