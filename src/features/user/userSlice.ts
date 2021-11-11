import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/types';
import { appLocalStorage } from '../../shared/localStorage';
import { UserState } from './types';

const initialState: UserState = {
  username: appLocalStorage.getItem('username'),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    rename: (state, action: PayloadAction<string>) => {
      const username = action.payload.toLocaleLowerCase();
      state.username = username;
      appLocalStorage.setItem('username', username);
    },
  },
});

export const getUsername = (state: RootState) => state.user.username;

export const { rename } = userSlice.actions;

export default userSlice.reducer;
