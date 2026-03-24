import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = (props) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[55%] py-5 w-full mt-10 flex items-center justify-start gap-5 felx-nowrap"
    >
      {props.data.map((e) => {
        if (e.newTask) {
          return <NewTask data={e} id={props.id} />;
        }
        if (e.active) {
          return <AcceptTask data={e} id={props.id} />;
        }
        if (e.completed) {
          return <CompleteTask data={e} />;
        }
        if (e.failed) {
          return <FailedTask data={e} />;
        }
      })}
    </div>
  );
};

export default TaskList;
