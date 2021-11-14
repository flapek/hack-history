import { configureStore } from '@reduxjs/toolkit';
import atbashSlice from '../features/atbash/atbashSlice';
import scytaleSlice from '../features/scytale/scytaleSlice';
import userReducer from '../features/user/userSlice';

const store = configureStore({
  reducer: { user: userReducer, atbash: atbashSlice, scytale: scytaleSlice },
});

export default store;
