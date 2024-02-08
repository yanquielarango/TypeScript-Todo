import { useTodoContext } from "../context/todoContext"
import Todo from "./Todo"



const Todos = () => {
  const {todos, updateTodo} = useTodoContext()
  return (
    <>
    {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} updateTodo={updateTodo}/>
    ))}
    </>
  )
}

export default Todos;