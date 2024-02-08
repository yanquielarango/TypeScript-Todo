import   {  createContext, useContext, useState } from 'react';


import type { ITodo, TodoContextType } from '../types';


type TodoContextProviderProps = {
  children : React.ReactNode
}


export const TodoContext = createContext<TodoContextType | null >(null)

 export default function TodoContextProvider({ children }: TodoContextProviderProps) {

    const [todos, setTodos] = useState<ITodo[]>([
      {
        id: 1,
        title: 'post 1',
        description: 'this is a description',
        completed: false,
      },
      {
        id: 2,
        title: 'post 2',
        description: 'this is a description',
        completed: true,
      },
    ])

    const saveTodo = (todo: ITodo) => {
      const newTodo:ITodo = {
        id: Math.random(),
        title: todo.title,
        description: todo.description,
        completed: false
      };
      setTodos([...todos, newTodo])
    };

    const updateTodo = (id: number) => {
        todos.filter((todo) => {
          if(todo.id === id) {
            todo.completed = !todo.completed;
            setTodos([...todos])
          }
        })
    }


   return (
     <TodoContext.Provider
      value={{
        todos,
        saveTodo,
        updateTodo
      }}
     >
      {children}
    </TodoContext.Provider>
   )
 }



 export function useTodoContext() {
   const context =useContext(TodoContext);
   if (context === undefined) {
     throw new Error(
       "useTodoContext must be used within a TodoContextProvider"
     )
   }

   return context
 }