import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import apiSlice from "../slice/apiSlice";
import postApiSlice from "../slice/postApiSlice";
import darkModeReducer from "../slice/darkModeSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    numbers: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [postApiSlice.reducerPath]: postApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, postApiSlice.middleware),
});

export default store;
