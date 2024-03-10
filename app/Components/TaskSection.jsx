import React, { useContext } from 'react'
import SectionHeading from './SectionHeading'
import Task from './Task/Task'
import TaskCompleted from './Task/TaskCompleted'
import { TasksContext } from '../context/tasks'

export default function TaskSection() {

  const { tasks, completedTasks } = useContext(TasksContext);

  return (
    <div>
      {/* Today's Task */}
      <SectionHeading text="Today's Task" />
      <section id="task">
        <ul className='flex flex-col gap-2'>
          {
            tasks.map((task, key) => {
              return <Task task={task} key={key} />
            })
          }
        </ul>
      </section>

      {/* Completed Task */}
      {completedTasks.length === 0 ? "" : <SectionHeading text="Completed Task" />}
      <section id="completedTask">
        <ul className='flex flex-col gap-2'>
          {
            completedTasks.map((task, key) => {
              return <TaskCompleted task={task} key={key} />
            })
          }
        </ul>
      </section>

    </div>
  )
}
