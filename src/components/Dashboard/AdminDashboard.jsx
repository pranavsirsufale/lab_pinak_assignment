import React from "react";
import Header from "../Header/Header";
import CreateTask from "../Header/CreateTask";
import AllTasks from "../Header/AllTasks";

function AdminDashboard() {
  return (
    <div className="h-screen w-full p-7">
      <Header />
     <CreateTask/>
     <AllTasks/>
    </div>
  );
}

export default AdminDashboard;
