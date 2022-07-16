import React from 'react'
import './App.css'
import { TodoList } from './components/todo-list'
import { AddTodo } from './components/add-todo'

export default function App() {
  return (
    <div className="App container pt-2">
      <AddTodo />
      <TodoList />
    </div>
  )
}
