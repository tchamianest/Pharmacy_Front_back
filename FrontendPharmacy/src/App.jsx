import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Home/Hero";
import LatestPro from "./components/Product/LatestPro";
import AllProduct from "./components/AllProduct/AllProduct";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="dark:bg-gray-800">
      <Navbar />
      <Hero />
      <LatestPro />
      <AllProduct />
      <Footer />
    </div>
  );
};

export default App;
