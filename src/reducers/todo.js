import {
    ADD_TODO_STARTED,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    FETCH_TODO_STARTED,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_STARTED,
    DELETE_TODO_FAILURE,
    TOGGLE_TODO_STARTED,
    TOGGLE_TODO_SUCCESS,
    TOGGLE_TODO_FAILURE
} from "../actions-types/todo";

const initialState = {
    allIds: [],
    byIds: {},
    loading: false,
    error: null
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODO_STARTED: {
            return {
                ...state,
                loading: true,
            };
        }

        case FETCH_TODO_SUCCESS: {
            const { todos } = action.payload;
            const allIdsIn = [];
            const byIdsIn = {};
            for(let itemId in todos) {
                const newId = todos[itemId].id;
                allIdsIn.push(newId);
                byIdsIn[newId] = todos[itemId];
            };
            
            return {
                ...state,
                loading: false,
                error: null,
                allIds: [...allIdsIn],
                byIds: {...byIdsIn}
            };
        }

        case FETCH_TODO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        }

        case ADD_TODO_STARTED: {
            return {
                ...state,
                loading: true,
            };
        }
        
        case ADD_TODO_SUCCESS: {
            const { id, content } = action.payload.data;

            return {
                ...state,
                loading: false,
                error: null,                
                allIds: [...state.allIds, id],                
                byIds: {
                    ...state.byIds,                    
                    [id]: {
                        content,
                        completed: false,
                        id: id,
                    }
                }
            };
        }

        case ADD_TODO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        }
        
        case DELETE_TODO_STARTED: {
            return {
                ...state,
                loading: true
            };
        }
        
        case DELETE_TODO_SUCCESS: {
            const { data } = action.payload;
            const { id } = data;
            const newByIds = {...state.byIds};
            delete newByIds[id];

            return {
                ...state,
                loading: false,
                allIds: [...state.allIds].filter((item) => item !== id),
                byIds: newByIds
            };
        }

        case DELETE_TODO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }

        case TOGGLE_TODO_STARTED: {
            return {
                ...state,
                loading: true
            };
        }

        case TOGGLE_TODO_SUCCESS: {
            const { data } = action.payload;
            const { id } = data;
            const targetTodo = state.byIds[id];

            return {
                ...state,
                loading: false,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...targetTodo,
                        completed: !targetTodo.completed,
                    },
                }
            };
        }

        case TOGGLE_TODO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }


        default:
            return state;
    };
}
