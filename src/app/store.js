import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducers/todo';
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: [thunk],
});
