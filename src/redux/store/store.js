import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import apiSlice from "../slice/apiSlice";

const store = configureStore({
  reducer: {
    numbers: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
