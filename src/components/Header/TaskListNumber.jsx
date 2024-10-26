import React from "react";

function TaskListNumber() {
  return (
    <div id="task-list" className="flex overflow-x-auto mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] py-5 px-10 bg-red-400">
        <h2 className="text-3xl font-semibold"> 0</h2>
        <h3 className="text-3xl font-medium"> New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-5 px-10 bg-blue-400">
        <h2 className="text-3xl font-semibold"> 0</h2>
        <h3 className="text-3xl font-medium"> New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-5 px-10 bg-green-400">
        <h2 className="text-3xl font-semibold"> 0</h2>
        <h3 className="text-3xl font-medium"> New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-5 px-10 bg-yellow-400">
        <h2 className="text-3xl font-semibold"> 0</h2>
        <h3 className="text-3xl font-medium"> New Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;
