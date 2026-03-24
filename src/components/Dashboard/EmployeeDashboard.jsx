import React from "react";
import Header from "../other/header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header setUser={props.setUser} data={props.data.name} />
      <TaskListNumber data={props.data.taskCount} />
      <TaskList data={props.data.tasks} id={props.data.id} />
    </div>
  );
};

export default EmployeeDashboard;
