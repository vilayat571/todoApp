import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNew} from '../redux/todos/todoSlice';

function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTitle(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    dispatch(addNew({ id: Math.random(), title, completed: false }))
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} >
      <input onChange={(e) => handleChange(e)} value={title} required className="new-todo" placeholder="What needs to be done?" autoFocus />
    </form>
  )
}

export default Form
