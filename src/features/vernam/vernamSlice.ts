import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/types';
import { Hint } from '../../shared/types';
import { VernamState } from './types';

const initialState: VernamState = {
  hints: [
    { description: 'Used alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZ.' },
    {
      description: 'https://www.geeksforgeeks.org/vernam-cipher-in-cryptography/',
    },
  ],
};

export const vernamSlice = createSlice({
  name: 'vernam',
  initialState,
  reducers: {},
});

export const getHints = (state: RootState): Hint[] => state.vernam.hints;

// export const {} = scytaleSlice.actions;

export default vernamSlice.reducer;
