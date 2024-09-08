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
const LatestPro = (data) => {
  function getLatestSevenItems(items) {
    // Sort the array by the createdAt field in descending order
    const sortedItems = items.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    // Return the first 7 items from the sorted array
    return sortedItems.slice(0, 7);
  }

  const latestSevenItems = getLatestSevenItems(data.data);

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // screens less than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // screens less than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className=" bg-gray-900 text-white">
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
          <div className=" lg:block hidden min-w-[280px] max-w-[300px]  relative group overflow-hidden rounded-lg shadow-lg">
            <div className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110">
              <video
                src="./medicalvideo.mp4" // Replace with your online video URL
                className="w-full h-full object-fill object-center"
                muted
                loop
                autoPlay
                playsInline
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-2xl text-center p-4 capitalize  font-extrabold text-primary">
                Prioritize your life by focusing on your well-being and personal
                growth. Make choices that align with your values and needs,
                ensuring a fulfilling and balanced life.
              </p>
            </div>
          </div>

          <div className="flex-1 bg-gray-800 object-cover w-full lg:max-w-[80%] max-w-full rounded-lg  text-black p-1 sm:items-center">
            <Slider {...settings} className="relative p-0 m-0  ">
              {latestSevenItems.map((el, i) => (
                <>
                  <div key={i} className="flex m-0">
                    <Product
                      productImage={el.productPictures}
                      productName={el.productName}
                      SellerName={el.SellerName}
                      location={el.locationName}
                      price={el.productPrice}
                      id={el.id}
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
