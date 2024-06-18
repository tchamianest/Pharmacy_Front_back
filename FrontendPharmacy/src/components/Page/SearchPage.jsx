import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import Product from "../cardFront/Product";
import Cardseacrh from "../cardFront/Cardseacrh";

function SearchPage() {
  return (
    <div>
      <div className="flex max-h-[100] fixed justify-center dark:bg-gray-800 items-center flex-col  gap-8">
        <Navbar />
      </div>
      <div className="p-10  bg-gray-800 flex gap-4   content-center">
        {/* left sections  */}
        <div className="w-[20%] mt-[90px] h-[100vh]   bg-gray-300 rounded-sm">
          d
        </div>
        {/* the search section  */}
        <div className="w-[80%] mt-[90px]  grid-cols-1 grid gap-4">
          <Cardseacrh />
          <Cardseacrh />
          <Cardseacrh />
          <Cardseacrh />
          <Cardseacrh />
          <Cardseacrh />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
