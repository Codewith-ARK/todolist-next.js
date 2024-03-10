import React, { createContext, useState } from 'react';

const TasksContext = createContext({
  tasks: [],
  setTasks: () => {},
  completedTasks: [],
  setCompletedTasks: () => {},
});

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Functions to update tasks and completed tasks

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, completedTasks, setCompletedTasks }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
