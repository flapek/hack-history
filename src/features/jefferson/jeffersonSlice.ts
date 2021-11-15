import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/types';
import { Hint } from '../../shared/types';
import { JeffersonState } from './types';

const initialState: JeffersonState = {
  hints: [],
};

export const jeffersonSlice = createSlice({
  name: 'jefferson',
  initialState,
  reducers: {},
});

export const getHints = (state: RootState): Hint[] => state.jefferson.hints;

// export const {} = scytaleSlice.actions;

export default jeffersonSlice.reducer;
