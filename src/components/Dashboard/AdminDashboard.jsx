import React from "react";
import Header from "../other/header";
import CreateTask from "../other/CreateTask";
import AllTasks from "../other/AllTasks";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-7">
      <Header setUser={props.setUser} data={"Admin"} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
