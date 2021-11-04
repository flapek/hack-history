import { configureStore } from '@reduxjs/toolkit';
import atbashSlice from '../features/atbash/atbashSlice';
import userReducer from '../features/user/userSlice';

const store = configureStore({
  reducer: { user: userReducer, atbash: atbashSlice },
});

export default store;
