import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../components/Page/Dashboard";

const ProtectedRoute = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Dashboard /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
