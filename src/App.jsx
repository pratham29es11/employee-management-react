import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [authData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) setUser(loggedInUser.role);
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    const employee = authData?.find(
      (e) => e.email === email && e.password === password,
    );

    if (employee) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee }),
      );
      return;
    }

    alert("Invalid Credentials");
  };

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const currentEmployee =
    user === "employee"
      ? authData?.find((e) => e.id === loggedInUser?.data?.id)
      : null;

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user == "admin" ? (
        <AdminDashboard setUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard setUser={setUser} data={currentEmployee} />
      ) : null}
    </>
  );
};

export default App;
