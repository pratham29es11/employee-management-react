import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = (props) => {
  const [authData, setAuthData] = useContext(AuthContext);

  const acceptHandler = () => {
    const updatedData = authData.map((e) => {
      if (e.id === props.id) {
        const updatedTask = e.tasks.map((t) => {
          if (t.taskTitle === props.data.taskTitle) {
            return {
              ...t,
              newTask: false,
              active: true,
            };
          }
          return t;
        });
        return {
          ...e,
          taskCount: {
            ...e.taskCount,
            newTask: e.taskCount.newTask - 1,
            active: e.taskCount.active + 1,
          },
          tasks: updatedTask,
        };
      }
      return e;
    });
    setAuthData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData));
    const current_user = authData.find((e) => e.id === props.id);
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "employee", data: current_user }),
    );
  };
  return (
    <div className="shrink-0 h-full w-75 p-5 bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {props.data.category}
        </h3>
        <h4 className="text-sm text-white">{props.data.date}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{props.data.taskTitle}</h2>
      <p className="text-sm mt-2 text-white">{props.data.taskDescription}</p>
      <div className="text-sm mt-10">
        <button
          onClick={acceptHandler}
          className="bg-green-400 p-3 cursor-pointer"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default NewTask;
