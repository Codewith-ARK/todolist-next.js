"use client"
import React, { useState } from "react";
import SectionHeading from "./Components/SectionHeading";
import Category from "./Components/Category";
import AddTaskSection from "./Components/AddTaskSection";
import TaskSection from "./Components/TaskSection";
import { TasksProvider } from "./context/tasks";
import Time from "./Components/Time";
const page = () => {

  const [mainTask, setMainTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);



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

    <div className="h-screen overflow-hidden grid grid-cols-3 grid-rows-4 gap-4 px-20 py-4">
      <h1 className="text-6xl text-center font-bold col-span-3">ARK's Todo List</h1>
      <TasksProvider>
        <div className="row-span-3 col-span-3 grid grid-cols-3 gap-4">
          {/* Col 1 */}
          <div className="grid grid-cols-2 grid-rows-4 gap-4">
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <div className="border border-gray-400 rounded-md col-span-2">
              Create New
            </div>
          </div>

          {/* Col 2 */}
          <div className="grid grid-rows-2">
            <AddTaskSection />
            <Time />
          </div>

          {/* Col 3 */}
          <div className="p-4 rounded-lg bg-[#E8E6E6]  overflow-y-auto">
            <TaskSection />
          </div>
        </div>
      </TasksProvider>

    </div>
  );
};

export default page;
