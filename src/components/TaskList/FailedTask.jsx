import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="shrink-0 h-full w-75 p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm text-white">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-white">{data.taskDescription}</p>
      <div className="text-sm bg-red-600 mt-10 py-3 text-center">Failed</div>
    </div>
  );
};

export default FailedTask;
