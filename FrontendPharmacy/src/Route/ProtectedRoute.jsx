import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Dashboard from "../components/Page/Dashboard";

const ProtectedRoute = () => {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    const check = async () => {
      try {
        const check = await axios.get(
          "http://localhost:5000/api/users/tokecheck",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("HeaderToken"),
            },
          }
        );

        if (check.data.check) {
          setAuth(true);
        }
      } catch (error) {
        setAuth(false);
      }
    };
    check();
  });

  if (auth === null) {
    return (
      <div className="flex items-center justify-center">
        <h1>Loading ...</h1>
      </div>
    );
  } else {
    const isAuthenticated = auth;

    return isAuthenticated ? <Dashboard /> : <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
