import { createSlice } from '@reduxjs/toolkit';

const landingHeaderReducer = createSlice({
  name: 'landingHeader',
  initialState: {
    showHeader: false,
  },
  reducers: {
    toggleheader: (state) => {
      state.showHeader = !state.showHeader;
    },
  },
});

export const { toggleheader } = landingHeaderReducer.actions;
export default landingHeaderReducer.reducer;
