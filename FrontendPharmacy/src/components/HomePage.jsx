// eslint-disable-next-line no-unused-vars
import React from "react";
import MapSections from "./MapSections";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import Navbar from "./navbar/Navbar";
import Hero from "./Home/Hero";
import Footer from "./Footer/Footer";
import LatestPro from "./Product/LatestPro";
import AllProduct from "./AllProduct/AllProduct";

function HomePage() {
  return (
    <div className="dark:bg-gray-800">
      <Navbar />
      <Hero />
      <LatestPro />
      <AllProduct />
      <MapSections />
      <Footer />
    </div>
  );
}

export default HomePage;
