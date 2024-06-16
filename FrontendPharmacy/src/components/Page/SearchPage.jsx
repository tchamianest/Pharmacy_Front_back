import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";

function SearchPage() {
  return (
    <div>
      <div className="flex justify-center dark:bg-gray-800 items-center flex-col  gap-8">
        <Navbar />
      </div>
      <div className="p-10 bg-white">Body sections </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
