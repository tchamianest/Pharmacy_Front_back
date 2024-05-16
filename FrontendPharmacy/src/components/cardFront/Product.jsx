/* eslint-disable react/prop-types */
import React from "react";

const Product = (props) => {
  return (
    <div className="rounded-xl shadow-lg max-w-[330px] m-2 dark:bg-gray-200 bg-gray-100">
      <div className="p-5 flex flex-col">
        <div className="rounded-xl overflow-hidden">
          <img src={props.productImage} alt="" />
        </div>
        <h5 className="text-1xl md:text-2xl  font-medium mt-3 text-secondary">
          {props.productName}
        </h5>
        <div className="flex gap-3 mt-0">
          <p className="text-gray-700 text-lg mt-3 text-center font-bold ">
            Seller :
          </p>
          <p className="text-slate-500 text-lg mt-3 text-center ">
            {props.SellerName}
          </p>
        </div>
        <div className="flex gap-3 mt-0">
          <p className="text-gray-700 text-lg text-center font-bold mt-0 ">
            Location :
          </p>
          <p className="text-slate-500 text-lg text-center mt-0 ">
            {props.location}
          </p>
        </div>
        <div className="flex gap-3 mt-0">
          <p className="text-gray-700 text-lg  text-center font-bold mt-0 ">
            Price :
          </p>
          {/* change */}
          <p className="text-slate-500 text-lg text-center mt-0 mb-3">
            {props.price} RWF
          </p>
        </div>
        <a
          href="#"
          className="text-center bg-blue-400 text-white font-bold p-1 rounded-full hover:bg-primary"
        >
          {" "}
          View Location
        </a>
      </div>
    </div>
  );
};

export default Product;
