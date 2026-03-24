import React from "react";

const Header = (props) => {
  const handleLogOut = () => {
    localStorage.removeItem("loggedInUser");
    props.setUser(null);
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />{" "}
        <span className="text-3xl font-semibold text-white">
          {props.data} 🙋‍♂️
        </span>
      </h1>
      <button
        onClick={handleLogOut}
        className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
