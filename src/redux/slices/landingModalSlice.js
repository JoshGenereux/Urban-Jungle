import { createSlice } from '@reduxjs/toolkit';

const landingModalReducer = createSlice({
  name: 'landingModal',
  initialState: {
    showModal: true,
  },
  reducers: {
    show: (state) => {
      state.showModal = true;
    },
    hide: (state) => {
      state.showModal = false;
    },
  },
});

export const { show, hide } = landingModalReducer.actions;
export default landingModalReducer.reducer;
