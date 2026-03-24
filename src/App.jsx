import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedUserData, setLoggedUserData] = useState(null);

  const [authData, setAuthData] = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUser(loggedInUser.role);
        setLoggedUserData(loggedInUser.data);
      } else {
        setUser(null);
        setLoggedUserData(null);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      const adminData = JSON.parse(localStorage.getItem("admin")) || "";
      setLoggedUserData(adminData[0]);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: adminData[0] }),
      );
    } else if (authData) {
      const employee = authData.find(
        (e) => e.email === email && e.password === password,
      );
      if (employee) {
        setUser("employee");
        setLoggedUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
        return;
      }
    } else alert("Invalid Credentials");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user == "admin" ? (
        <AdminDashboard setUser={setUser} data={loggedUserData} />
      ) : user == "employee" ? (
        <EmployeeDashboard setUser={setUser} data={loggedUserData} />
      ) : null}
    </>
  );
};

export default App;
