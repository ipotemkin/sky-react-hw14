import {
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    ADD_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
    FETCH_TODO_STARTED,
    FETCH_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
    DELETE_TODO_STARTED,
    DELETE_TODO_SUCCESS,
    TOGGLE_TODO_STARTED,
    TOGGLE_TODO_SUCCESS,
    TOGGLE_TODO_FAILURE
} from "../actions-types/todo";

// get
export const fetchTodoStarted = () => ({
    type: FETCH_TODO_STARTED,
});

export const fetchTodoSuccess = todos => ({
    type: FETCH_TODO_SUCCESS,
    payload: { todos },
});

export const fetchTodoFailure = error => ({
    type: FETCH_TODO_FAILURE,
    payload: { error },
});
// ------


// create
export const addTodoStarted = () => ({ type: ADD_TODO_STARTED });

export const addTodoSuccess = data => ({
    type: ADD_TODO_SUCCESS,
    payload: { data }
});

export const addTodoFailure = (error) => ({
    type: ADD_TODO_FAILURE,
    payload: { error },
});
// -------

// delete
export const deleteTodoStarted = () => ({ type: DELETE_TODO_STARTED });

export const deleteTodoSuccess = data => ({
    type: DELETE_TODO_SUCCESS,
    payload: { data },
});

export const deleteTodoFailure = error => ({
    type: DELETE_TODO_FAILURE,
    payload: { error },
});
// -------

// patch
export const toggleTodoStarted = () => ({ type: TOGGLE_TODO_STARTED });

export const toggleTodoSuccess = data => ({
    type: TOGGLE_TODO_SUCCESS,
    payload: { data },
});

export const toggleTodoFailure = error => ({
    type: TOGGLE_TODO_FAILURE,
    payload: { error },
});
// ------