import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";

// import todoReducer from '../reducers/todo';
import todoReducerV2 from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    // todo: todoReducer,
    todo: todoReducerV2
  },
  middleware: [thunk],
});
