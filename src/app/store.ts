import { configureStore } from '@reduxjs/toolkit';
import atbashSlice from '../features/atbash/atbashSlice';
import caesarSlice from '../features/caesar/caesarSlice';
import scytaleSlice from '../features/scytale/scytaleSlice';
import userReducer from '../features/user/userSlice';
import vigenereSlice from '../features/vigenere/vigenereSlice';
import jeffersonSlice from '../features/jefferson/jeffersonSlice';
import vernamSlice from '../features/vernam/vernamSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    atbash: atbashSlice,
    scytale: scytaleSlice,
    caesar: caesarSlice,
    vigenere: vigenereSlice,
    jefferson: jeffersonSlice,
    vernam: vernamSlice,
  },
});

export default store;
