import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { todoListErrorSelector, todoListLoadingSelector, todosSelector } from "../../selectors/todo"
import { fetchTodos } from "../../thunk/todo"
import { Todo } from "../todo"


export const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(todosSelector)
    const loading = useSelector(todoListLoadingSelector)
    const error = useSelector(todoListErrorSelector)
    
    // eslint-disable-next-line
    useEffect(() => { dispatch(fetchTodos()) }, [])
    
    if (loading) {
        return <div className="container card">
            <h3>Загружаю...</h3>
        </div>
    }

    if (error) {
        return <div className="container card">
            <h3 style={{ color: 'red' }}>{error.message}</h3>
        </div>
    }

    return <div className="container card">
        { todos.length > 0 ?
            todos.map(todo => <Todo key={todo.id} todo={todo} />)
            : <h3>Задач пока нет :)</h3> }
    </div>
}
