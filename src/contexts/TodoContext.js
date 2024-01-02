import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: Number,
        todo: String,
        complated: Boolean

    }],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
