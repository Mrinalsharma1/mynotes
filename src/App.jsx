import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItems } from './components/index'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    console.log("add todo", todo)
    setTodos((prev) => [{ ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? { ...prevtodo, completed: !prevtodo.completed } : prevtodo)))
  }

  useEffect(() => {
    const todolocal = JSON.parse(localStorage.getItem('todos'))
    if (todolocal && todolocal.length > 0) {
      setTodos(todolocal)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => (
                <div key={todo.id} className='w-full'>
                  <TodoItems todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App