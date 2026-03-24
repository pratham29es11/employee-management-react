import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="shrink-0 h-full w-75 p-5 bg-green-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm text-white">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-white">{data.taskDescription}</p>
      <div className="bg-green-600 text-sm mt-10 py-3 text-center">
        Completed
      </div>
    </div>
  );
};

export default CompleteTask;
