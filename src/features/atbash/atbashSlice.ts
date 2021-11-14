import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/types';
import { Hint } from '../../shared/types';
import { AtbashState } from './types';

const initialState: AtbashState = {
  hints: [
    { description: 'Used alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZ.' },
    {
      description:
        'Atbash was a simple substitution cipher. The rule of encryption was in replacing the i-th letter of the alphabet by (n-i+1)-th letter, where n was the number of letters in the alphabet.',
    },
    {
      description:
        'Example: \nPlain text:  abcdefghijklmnopqrstuvwxyz\nCipher text: ZYXWVUTSRQPONMLKJIHGFEDCBA',
    },
  ],
};

export const atbashSlice = createSlice({
  name: 'atbash',
  initialState,
  reducers: {},
});

export const getHints = (state: RootState): Hint[] => state.atbash.hints;

// export const {} = atbashSlice.actions;

export default atbashSlice.reducer;
