import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/types';
import { Hint } from '../../shared/types';
import { VigenereState } from './types';

const initialState: VigenereState = {
  hints: [
    { description: 'Used alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZ.' },
    { description: 'A key of arbitrary length has to be chosen. The key, and the text that will be encoded, have to use characters from the same alphabet.' },
    { description: 'As an example, the sentence "DIES IST EIN GEHEIMER TEXT" (German for: “This is a secret text”) will now be decoded with the key "KEY". First, we write the key beneath the plaintext and repeat it until the whole length of the plaintext is covered.' },
    { description: 'https://www.cryptool.org/en/cto/vigenere' },
    { description: 'Key is empty string and password is secret' },
  ],
};

export const vigenereSlice = createSlice({
  name: 'vigenere',
  initialState,
  reducers: {},
});

export const getHints = (state: RootState): Hint[] => state.vigenere.hints;

// export const {} = scytaleSlice.actions;

export default vigenereSlice.reducer;
