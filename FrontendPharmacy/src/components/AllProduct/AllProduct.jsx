/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../cardFront/Product";

const AllProduct = () => {
  const [medical, setMedical] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/api/product", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("HeaderToken"),
          },
        });
        setMedical(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log("Medical", medical);
  return (
    <div className="container mt-10 min-h-[300px]">
      {/* Header Title  */}
      <div className=" group-only:absolute ">
        <h1 className="font-bold text-3xl text-blue-400 dark:text-white">
          Products section :
        </h1>
        <div className="relative h-1 dark:bg-white bg-blue-400 mt-5 max-w-[19%]"></div>
      </div>
      {/* Body container for all Product */}
      <div className="inline-grid grid-cols-1 sm:grid-cols-4 gap-4 m-7">
        {medical.map((el, i) => (
          <>
            <div key={el.id} id={el.id} className="flex m-0">
              <Product
                productImage={el.productPictures}
                productName={el.productName}
                SellerName={el.SellerName}
                location={el.locationName.split(" ")[2]}
                price={el.productPrice}
                id={el.id}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
