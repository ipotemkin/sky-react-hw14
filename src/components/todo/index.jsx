import { useDispatch } from "react-redux"
import { deleteleTodo, toggleTodo } from "../../actions/todo"

export const Todo = ({ todo }) => {
    const dispatch = useDispatch()

    const toggleTodoItem = () => dispatch(toggleTodo(todo.id))

    const deleteTodoItem = () => dispatch(deleteleTodo(todo.id))

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
