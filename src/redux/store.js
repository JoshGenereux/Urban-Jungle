import { configureStore } from '@reduxjs/toolkit';
import landingModalReducer from './slices/landingModalSlice';
import landingHeaderReducer from './slices/landingHeaderSlice';

const store = configureStore({
  reducer: {
    landingModal: landingModalReducer,
    landingHeader: landingHeaderReducer,
  },
});

export default store;
