import React, { createContext, useState } from 'react';

const TasksContext = createContext({
  tasks: [],
  setTasks: () => {},
  completedTasks: [],
  setCompletedTasks: () => {},
  completedCount: 0,
  setCompletedCount: () => {},
});

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);

  // Functions to update tasks and completed tasks

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, completedTasks, setCompletedTasks, completedCount, setCompletedCount }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
