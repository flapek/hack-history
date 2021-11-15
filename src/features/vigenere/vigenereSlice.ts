import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/types';
import { Hint } from '../../shared/types';
import { VigenereState } from './types';

const initialState: VigenereState = {
  hints: [],
};

export const vigenereSlice = createSlice({
  name: 'vigenere',
  initialState,
  reducers: {},
});

export const getHints = (state: RootState): Hint[] => state.vigenere.hints;

// export const {} = scytaleSlice.actions;

export default vigenereSlice.reducer;
