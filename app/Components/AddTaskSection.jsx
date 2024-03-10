import React, { useContext, useState } from 'react'
import { TasksContext } from '../context/tasks'

export default function AddTaskSection() {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const {tasks, setTasks} = useContext(TasksContext)

  const submitHandler = (element) => {
    element.preventDefault();
    setTasks([...tasks, {title}]);
    setTitle('');
  }


  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4">
    <input
      type="text"
      placeholder="Enter task here"
      className="text-base border-zinc-800 border p-2 rounded"
      value={title}
      onChange={element => setTitle(element.target.value)}
      autoFocus
    />
    {/* <input
      type="text"
      placeholder="Enter description here"
      className="text-base border-zinc-800 border p-2 rounded"
      value={desc}
      onChange={element => setDesc(element.target.value)}
    /> */}
    <input
      type="submit"
      value="Add Task"
      className="bg-black hover:bg-gray-800 text-white px-8 py-2 rounded cursor-pointer" />
  </form>
)
}
