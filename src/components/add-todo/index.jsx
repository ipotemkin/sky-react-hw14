import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../actions/todo"

export const AddTodo = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const updateInput = value => setValue(value)

    const handleAddTodo = () => {
        if (value.length === 0) return
        dispatch(addTodo(value))
        setValue('')
    }

    const handleKeyDown = e => { if (e.keyCode === 13) handleAddTodo() }

    return <div className="card">
        <div className="form-control">
            <input
                className="input"
                type="text"
                placeholder="Здесь будет текст задачи"
                value={value}
                onChange={e => updateInput(e.target.value)}
                onKeyDown={e => handleKeyDown(e)}
            />
            <hr />
            <button className="btn primary" onClick={handleAddTodo}>
                Добавить задачу
            </button>
        </div>
    </div>
}