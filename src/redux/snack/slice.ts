import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackInfo: null,
};

const snackSlice = createSlice({
  name: "snack",
  initialState,
  reducers: {
    setSnackInfo: (state, action) => {
      state.snackInfo = action.payload;
    },
    unsetSnackInfo: (state) => {
      state.snackInfo = null;
    },
  },
});

export default snackSlice.reducer;

export const { setSnackInfo, unsetSnackInfo } = snackSlice.actions;
