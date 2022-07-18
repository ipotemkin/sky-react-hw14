import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: { 
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        fetchTodoStarted: state => {
            state.loading = true;
        },
        fetchTodoSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
            // console.log('action.payload -->', action.payload);
        },
        fetchTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },
        addTodoSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.data.push(action.payload);
        },
        addTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },
        deleteTodoSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = state.data.filter(item => item.id !== action.payload.id);
        },
        deleteTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },
        toggleTodoSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            const updatedElement = state.data.find(item => item.id === action.payload.id);
            updatedElement.completed = !updatedElement.completed;
        },
        toggleTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },
    }
});

export const {
    fetchTodoStarted,
    fetchTodoSuccess,
    fetchTodoFailure,
    addTodoSuccess,
    addTodoFailure,
    deleteTodoSuccess,
    deleteTodoFailure,
    toggleTodoSuccess,
    toggleTodoFailure
} = todoSlice.actions;

export default todoSlice.reducer;
