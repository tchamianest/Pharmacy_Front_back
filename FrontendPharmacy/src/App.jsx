import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./Route/ProtectedRoute";
import HomePage from "./components/HomePage";
import MapPage from "./components/Page/MapPage";
import Login from "./components/Page/Login";
import SearchPage from "./components/Page/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="product" element={<MapPage />} />
        <Route path="Search" element={<SearchPage />} />
        <Route path="dashboard" element={<ProtectedRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
