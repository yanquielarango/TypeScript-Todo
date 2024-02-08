import type { ITodo } from '../types';

type Props = {
  todo: ITodo,
  updateTodo: (id:number) => void
}

const Todo = ({todo, updateTodo}: Props)   => {
 

  console.log(todo.completed)


  return (
    <>
    <div>
      <h2 >{todo.completed ? <s>{todo.title}</s> : todo.title}</h2>
      <span >{todo.completed ? <s>{todo.description}</s> : todo.description}</span>
    </div>

    <button onClick={() => updateTodo(todo.id)}>complete</button>
    </>
  )
}


export default Todo
