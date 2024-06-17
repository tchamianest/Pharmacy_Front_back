import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import Product from "../cardFront/Product";

function SearchPage() {
  return (
    <div>
      <div className="flex justify-center dark:bg-gray-800 items-center flex-col  gap-8">
        <Navbar />
      </div>
      <div className="p-10 bg-gray-800 flex gap-4">
        {/* left sections  */}
        <div className="w-[20%] bg-gray-300 rounded-sm">d</div>
        {/* the search section  */}
        <div className="w-[80%] grid-cols-4 grid">
          <Product
            SellerName="Kalisa daniel"
            location="Kigalida"
            productName="Shoes"
          />
          <Product
            SellerName="Kalisa daniel"
            location="Kigalida"
            productName="Shoes"
          />
          <Product
            SellerName="Kalisa daniel"
            location="Kigalida"
            productName="Shoes"
          />
          <Product
            SellerName="Kalisa daniel"
            location="Kigalida"
            productName="Shoes"
          />
          <Product
            SellerName="Kalisa daniel"
            location="Kigalida"
            productName="Shoes"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
