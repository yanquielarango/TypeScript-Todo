import { useState } from 'react';
import { useTodoContext } from '../context/todoContext' ;
import type { ITodo } from '../types';


const AddTodo = () => {

  const {saveTodo} = useTodoContext()

  const [formData, setFormData] = useState<ITodo | {}> ();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.name] : e.currentTarget.value
    })
  }

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault()
    saveTodo(formData)
  } 

  return (
    <form onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div>
        <label htmlFor="name">Title</label>
        <input onChange={handleForm} type="text" name="title"/>
      </div>
      <div>
        <label htmlFor="name">Description</label>
        <input onChange={handleForm} type="text" name="description"/>
      </div>

      <button disabled={formData === undefined ? true : false}>Add Todo</button>
    </form>
  )
}


export default AddTodo