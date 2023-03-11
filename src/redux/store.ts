import { configureStore } from "@reduxjs/toolkit";

import snackReducer from "./snack/slice";

const store = configureStore({
  reducer: {
    snack: snackReducer,
  },
});

export default store;
