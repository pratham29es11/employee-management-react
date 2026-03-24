import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data, id }) => {
  const [authData, setAuthData] = useContext(AuthContext);

  const handleComplete = () => {
    const updatedData = authData.map((e) => {
      if (e.id === id) {
        const updatedTask = e.tasks.map((t) => {
          if (t.taskTitle === data.taskTitle) {
            return {
              ...t,
              active: false,
              completed: true,
            };
          }
          return t;
        });
        return {
          ...e,
          taskCount: {
            ...e.taskCount,
            active: e.taskCount.active - 1,
            completed: e.taskCount.completed + 1,
          },
          tasks: updatedTask,
        };
      }
      return e;
    });
    setAuthData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData));
    const current_user = authData.find((e) => e.id === id);
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "employee", data: current_user }),
    );
  };

  const handleFailed = () => {
    const updatedData = authData.map((e) => {
      if (e.id === id) {
        const updatedTask = e.tasks.map((t) => {
          if (t.taskTitle === data.taskTitle) {
            return {
              ...t,
              active: false,
              failed: true,
            };
          }
          return t;
        });
        return {
          ...e,
          taskCount: {
            ...e.taskCount,
            active: e.taskCount.active - 1,
            failed: e.taskCount.failed + 1,
          },
          tasks: updatedTask,
        };
      }
      return e;
    });
    setAuthData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData));
    const current_user = authData.find((e) => e.id === id);
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "employee", data: current_user }),
    );
  };

  return (
    <div className="shrink-0 h-full w-75 p-5 bg-yellow-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm text-white">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-white">{data.taskDescription}</p>
      <div className="flex justify-between mt-10">
        <button
          onClick={handleComplete}
          className="text-sm bg-green-500 cursor-pointer p-3"
        >
          Mark as Completed
        </button>
        <button
          onClick={handleFailed}
          className="text-sm bg-red-500 cursor-pointer p-3"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
