import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/types';
import { Hint } from '../../shared/types';
import { CaesarState } from './types';

const initialState: CaesarState = {
  hints: [],
};

export const caesarSlice = createSlice({
  name: 'caesar',
  initialState,
  reducers: {},
});

export const getHints = (state: RootState): Hint[] => state.caesar.hints;

// export const {} = atbashSlice.actions;

export default caesarSlice.reducer;
