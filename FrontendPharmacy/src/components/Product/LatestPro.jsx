import React from "react";
import Slider from "react-slick";
import Image from "../../assets/hero/store.png";
import "swiper/css";
import Product from "../cardFront/Product";

const dummyData = [
  {
    productImage: Image,
    productName: "prastamol",
    SellerName: "Tchami",
    location: "Remera KN 250 St",
    price: 900,
  },
  {
    productImage: Image,
    productName: "prastamol",
    SellerName: "Seller 2",
    location: "Remera KN 250 St",
    price: 950,
  },
  {
    productImage: Image,
    productName: "prastamol",
    SellerName: "Seller 3",
    location: "Remera KN 250 St",
    price: 850,
  },
  {
    productImage: Image,
    productName: "prastamol",
    SellerName: "Seller 3",
    location: "Remera KN 250 St",
    price: 850,
  },
  // Add more dummy data as needed
];
const LatestPro = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="bg-primary/20  dark:bg-gray-900 dark:text-white">
      <div className="container pb-7">
        <div className=" justify-between flex gap-2 pt-7 ">
          <div className="font-medium text-1xl sm:text-2xl dark:text-white text-blue-400">
            Trending Today
          </div>
          <div className="font-medium text-1xl sm:text-1xl dark:text-white text-blue-400">
            {new Date().toDateString()}
          </div>
        </div>
        {/* Left section of latest */}
        <div className="flex  mt-3 gap-5 ">
          <div className=" w-64 flex-none hidden sm:block py-7 items-center">
            <p className="font-bold text-1xl sm:text-2xl ">Welcome 😄</p>
            <p className="italic text-1xl pt-3">
              Investing in your health today is like planting seeds for a
              bountiful harvest tomorrow. It's putting resources into your
              well-being bank, ensuring a prosperous future. By prioritizing
              your health now, you're crafting a blueprint for longevity and
              vitality.
            </p>
          </div>
          <div className="flex-1  dark:bg-gray-800  bg-primary/20 max-w-[80%] rounded-lg  text-black p-1 items-center">
            <Slider {...settings} className="relative p-0 m-0  ">
              {dummyData.map((el, i) => (
                <>
                  <div key={i} className="flex m-0">
                    <Product
                      productImage={el.productImage}
                      productName={el.productName}
                      SellerName={el.SellerName}
                      location={el.location}
                      price={el.price}
                    />
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPro;
