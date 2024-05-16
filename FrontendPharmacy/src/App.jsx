import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./Route/ProtectedRoute";
import HomePage from "./components/HomePage";
import Login from "./components/Page/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<ProtectedRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
