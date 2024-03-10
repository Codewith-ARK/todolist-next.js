import React from 'react'
import { FiCheckCircle } from "react-icons/fi";


export default function TaskCompleted({ task, key }) {
  return (
    <li key={key} className="border rounded-lg px-2 py-4 border-gray-300">
      <div className="flex justify-between items-center">
        <FiCheckCircle
          className=" text-2xl aspect-square cursor-pointer"
        // onClick={() => completeTask(key)}
        />
        <p className="text-xl font-semibold line-through">{task.title}</p>
      </div>
    </li>
  )
}
