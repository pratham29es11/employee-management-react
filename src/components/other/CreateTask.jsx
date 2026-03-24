import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
const CreateTask = () => {
  const [authData, setAuthData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      taskTitle,
      taskDescription,
      date,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };
    const users = authData.map((e) => {
      if (e.name === assignTo) {
        return {
          ...e,
          tasks: [...e.tasks, task],
          taskCount: {
            ...e.taskCount,
            newTask: e.taskCount.newTask + 1,
          },
        };
      }
      return e;
    });
    setAuthData(users);
    localStorage.setItem("employees", JSON.stringify(users));
    setTaskTitle("");
    setTaskDescription("");
    setDate("");
    setCategory("");
    setAssignTo("");
  };
  return (
    <div className="bg-[#1c1c1c] rounded p-5 mt-7">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex w-full items-start justify-between text-white"
      >
        <div className="w-[40%] flex flex-col gap-4 mb-5">
          <div>
            <h3>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Make a UI design"
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <h3>Date</h3>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <h3>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              type="text"
              placeholder="Employee Name"
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <h3>Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              placeholder="design, dev, etc."
              className="border rounded p-2 w-full"
            />
          </div>
        </div>
        <div className="w-[40%] flex flex-col gap-4">
          <div>
            <h3>Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              name=""
              id=""
              cols="50"
              rows="9"
              className="border rounded w-full p-3"
            ></textarea>
          </div>
          <button className="w-full bg-green-400 p-2.5 rounded cursor-pointer">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
