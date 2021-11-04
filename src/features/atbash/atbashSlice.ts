import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/types';
import { Hint } from '../../shared/types';
import { AtbashState } from './types';

const initialState: AtbashState = {
  hints: new Set<Hint>([
    { description: 'Used alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZ.' },
    {
      description:
        'Atbash was a simple substitution cipher. The rule of encryption was in replacing the i-th letter of the alphabet by (n-i+1)-th letter, where n was the number of letters in the alphabet.',
    },
    {
      description:
        'Example: \nPlain text:  abcdefghijklmnopqrstuvwxyz\nCipher text: ZYXWVUTSRQPONMLKJIHGFEDCBA',
    },
  ]),
  showedHints: new Set<Hint>(),
};

export const atbashSlice = createSlice({
  name: 'atbash',
  initialState,
  reducers: {
    rename: (state, action: PayloadAction<string>) => {},
  },
});

export const getHints = (state: RootState) => state.atbash.hints;

export const { rename } = atbashSlice.actions;

export default atbashSlice.reducer;
