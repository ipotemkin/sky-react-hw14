import { useDispatch } from "react-redux"
// import { toggleTodo } from "../../actions/todo"
import { deleteTodo, toggleTodo } from "../../thunk/todo"

export const Todo = ({ todo }) => {
    const dispatch = useDispatch()

    const toggleTodoItem = () => {
        dispatch(toggleTodo(todo.id, !todo.completed))
        console.log('todo.completed -->', todo.completed)
    }

    const deleteTodoItem = () => dispatch(deleteTodo(todo.id))

    const truncateContent = (content, len) => (
        content.length < len ? content : content.slice(0, len) + "..."
    )
    
    return <div className="list-item">
        <div className="pl-1"
            style={{ cursor: 'pointer' }}
            onClick={toggleTodoItem}        
        >
            <span>{ todo.completed ? "✅" : "⏳" }</span>
            <span className="pl-1">{truncateContent(todo.content, 50)}</span>
        </div>
        
        
        <button className="btn flat"
            onClick={deleteTodoItem}
        >
            ❌
        </button>
        
    </div>
}
