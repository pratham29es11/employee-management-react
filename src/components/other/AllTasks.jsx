import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const [authData, setAuthData] = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-10 rounded scroll-none">
      <div className="bg-green-400 rounded flex justify-between py-2 px-4 mb-2 text-white">
        <h2 className="w-1/5">Employee Name</h2>
        <h5 className="w-1/5">New Task</h5>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>
      <div>
        {authData.map((e) => {
          return (
            <div className="border border-green-300 rounded flex justify-between py-2 px-4 mb-2">
              <h2 className="w-1/5 text-white">{e.name}</h2>
              <h5 className="w-1/5 text-lg text-blue-400">
                {e.taskCount.newTask}
              </h5>
              <h5 className="w-1/5 text-lg text-yellow-400">
                {e.taskCount.active}
              </h5>
              <h5 className="w-1/5 text-lg text-green-400">
                {e.taskCount.completed}
              </h5>
              <h5 className="w-1/5 text-lg text-red-400">
                {e.taskCount.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
