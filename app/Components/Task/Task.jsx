import React, { useContext } from 'react'
import { FiTrash2, FiCircle } from "react-icons/fi";
import { TasksContext } from '../../context/tasks';

export default function Task({ task, key }) {

  const { tasks, setTasks, completedTasks, setCompletedTasks, setCompletedCount } = useContext(TasksContext)
  let completedCount;

  const completeTask = (key) => {
    let copyTask = [...tasks]; // copy original task array
    setCompletedTasks([...completedTasks, copyTask.splice(key, 1)]); // store the removed task into completedTask array
    console.log(completedTasks)
    setTasks(copyTask); // replace the original task array with an updated one
  }

  const deleteTask = (key) => {
    let copyTask = [...tasks]; // copy original task array
    copyTask.splice(key, 1); // store the removed task into completedTask array
    setTasks(copyTask); // replace the original task array with an updated one
  }

  return (
    <li key={key} className="border rounded-lg px-2 py-4 border-gray-300 bg-white">
      <div className="flex justify-between items-center">
        <FiCircle
          className=" text-2xl aspect-square cursor-pointer"
          onClick={() => completeTask(key)}
        />
        <p className="text-sm">{task.title}</p>
        <FiTrash2
          className="text-2xl text-red-500 cursor-pointer"
          title="Delete Task"
          onClick={deleteTask}
        />

      </div>
    </li>
  )
}
