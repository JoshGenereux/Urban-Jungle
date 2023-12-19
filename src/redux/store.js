import { configureStore } from '@reduxjs/toolkit';
import landingModalReducer from './slices/landingModalSlice';

const store = configureStore({
  reducer: {
    landingModal: landingModalReducer,
  },
});

export default store;
