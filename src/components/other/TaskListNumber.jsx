import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex mt-10 screen justify-between gap-5">
      {/* First Box */}
      <div className="rounded-xl h-40 w-[45%] bg-blue-400 py-6 px-9">
        <h2 className="text-2xl font-semibold">
          {data.newTask > 0 ? data.newTask : 0}
        </h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      {/* Second Box */}
      <div className="rounded-xl h-40 w-[45%] bg-green-400 py-6 px-9">
        <h2 className="text-2xl font-semibold">
          {data.completed > 0 ? data.completed : 0}
        </h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      {/* Third Box */}
      <div className="rounded-xl h-40 w-[45%] bg-yellow-400 py-6 px-9">
        <h2 className="text-2xl font-semibold">
          {data.active > 0 ? data.active : 0}
        </h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      {/* Fourth Box */}
      <div className="rounded-xl h-40 w-[45%] bg-red-400 py-6 px-9">
        <h2 className="text-2xl font-semibold">
          {data.failed > 0 ? data.failed : 0}
        </h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
