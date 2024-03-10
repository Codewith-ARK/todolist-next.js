"use client"
import React, { useContext, useState } from "react";
import SectionHeading from "./Components/SectionHeading";
import Category from "./Components/Category";
import AddTaskSection from "./Components/AddTaskSection";
import TaskSection from "./Components/TaskSection";
import { TasksContext, TasksProvider } from "./context/tasks";
import Time from "./Components/Time";
const page = () => {

  const [mainTask, setMainTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const {completedCount} = useContext(TasksContext);


  let renderTask = <p>No task available</p>

  // function to render all the tasks onto the screen
  // if (mainTask.length > 0) {
  //   renderTask = mainTask.map((task, key) => {
  //     return (

  //     )
  //   })
  // }

  // let renderCompletedTask = completedTask.map((task, key) => {
  //   return (
  //   )
  // })
  return (

    <div className="h-screen overflow-x-auto md:overflow-hidden grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-4 px-4 md:px-20 py-4 bg-[#E8E6E6] ">
      <h1 className="text-4xl md:text-6xl text-center font-bold col-span-3 flex justify-center items-center">ARK's Todo List</h1>
      <TasksProvider>
        <div className="row-span-3 col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Col 1 */}

          {/* Col 2 */}
          <div className="grid grid-rows-2 gap-4">
            <Time />
            <AddTaskSection />
          </div>

          {/* Col 3 */}
          <div className="p-4 rounded-lg border border-[#BEBDBD] bg-white overflow-y-auto">
            <TaskSection />
          </div>
        </div>
      </TasksProvider>

    </div>
  );
};

export default page;
