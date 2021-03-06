import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/types';
import { Hint } from '../../shared/types';
import { ScytaleState } from './types';

const initialState: ScytaleState = {
  hints: [
    { description: 'Used alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZ.' },
    {
      description:
        'Suppose the rod allows one to write four letters around in a circle and five letters down the side of it. The plaintext could be: "I am hurt very badly help".',
    },
    {
      description:
        'To decrypt, all one must do is wrap the leather strip around the rod and read across. The ciphertext is: "Iryyatbhmvaehedlurlp" Every fifth letter will appear on the same line, so the plaintext (after re-insertion of spaces) becomes: "I am hurt very badly help"',
    },
  ],
};

export const scytaleSlice = createSlice({
  name: 'scytale',
  initialState,
  reducers: {},
});

export const getHints = (state: RootState): Hint[] => state.scytale.hints;

// export const {} = scytaleSlice.actions;

export default scytaleSlice.reducer;
