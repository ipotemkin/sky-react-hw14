import axios from "axios";

import {
    // fetchTodoStarted,
    // fetchTodoSuccess,
    // fetchTodoFailure,
    
    // addTodoStarted,
    // addTodoSuccess,
    // addTodoFailure,
    
    // deleteTodoStarted,
    // deleteTodoSuccess,
    // deleteTodoFailure,
    
    // toggleTodoStarted,
    // toggleTodoSuccess,
    // toggleTodoFailure
} from "../actions/todo";

import {
    fetchTodoStarted,
    fetchTodoSuccess,
    fetchTodoFailure,
    addTodoSuccess,
    addTodoFailure,
    deleteTodoSuccess,
    deleteTodoFailure,
    toggleTodoSuccess,
    toggleTodoFailure
} from "../features/todo/todoSlice";

// const BASE_URL = './data.json';
const BASE_URL = 'https://62d443e25112e98e484d24a8.mockapi.io/api/v1/tasks';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = () => async dispatch => {
    dispatch(fetchTodoStarted());

    try {
        const { data } = (await Promise.all([
            axios.get(BASE_URL),
            delay(500)  // симулируем задержку загрузки чтобы посмотреть на loading...
        ]))[0];
        dispatch(fetchTodoSuccess(data));
    } catch(error) {
        dispatch(fetchTodoFailure(error));
    }

};

export const createTodo = content => async dispatch => {
    // dispatch(addTodoStarted());

    try {
        const { data } = await axios.post(BASE_URL, {
            content,
            completed: false
        });
                
        dispatch(addTodoSuccess(data));
    } catch(error) {
        dispatch(addTodoFailure(error));
    }

};

export const deleteTodo = id => async dispatch => {
    // dispatch(deleteTodoStarted());

    try {
        const { data } = await axios.delete(`${BASE_URL}/${id}`);        
        dispatch(deleteTodoSuccess(data));
    } catch(error) {
        dispatch(deleteTodoFailure(error));
    }

};

export const toggleTodo = (id, completed) => async dispatch => {
    // dispatch(toggleTodoStarted());

    try {
        const { data } = await axios.put(`${BASE_URL}/${id}`, { completed });        
        dispatch(toggleTodoSuccess(data));
    } catch(error) {
        dispatch(toggleTodoFailure(error));
    }

};
