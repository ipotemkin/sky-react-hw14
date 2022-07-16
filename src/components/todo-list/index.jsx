import { useSelector } from "react-redux"
import { todosSelector } from "../../selectors/todo"
import { Todo } from "../todo"


export const TodoList = () => {
    const todos = useSelector(todosSelector)

    return <div className="container card">
        { todos.length > 0 ?
            todos.map(todo => <Todo key={todo.id} todo={todo} />)
            : <h3>Задач пока нет :)</h3> }
    </div>
}
