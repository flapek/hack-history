import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/types';
import { Hint } from '../../shared/types';
import { CaesarState } from './types';

const initialState: CaesarState = {
  hints: [
    { description: 'Used alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZ.' },
    { description: 'The transformation can be represented by aligning two alphabets; the cipher alphabet is the plain alphabet rotated left or right by some number of positions.' },
    { description: 'The offset used for decryption is the length of the username as passed on the welcome page.' },
  ],
};

export const caesarSlice = createSlice({
  name: 'caesar',
  initialState,
  reducers: {},
});

export const getHints = (state: RootState): Hint[] => state.caesar.hints;

// export const {} = atbashSlice.actions;

export default caesarSlice.reducer;
