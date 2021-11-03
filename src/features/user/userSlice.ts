import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/types';
import { UserState } from './types';

const initialState: UserState = {
  username: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    rename: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.username = action.payload;
    },
  },
});

export const getUsername = (state: RootState) => state.user.username;

export const { rename } = userSlice.actions;

export default userSlice.reducer;
