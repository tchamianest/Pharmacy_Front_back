/* eslint-disable no-unused-vars */
import React from "react";
import Product from "../cardFront/Product";
import Image from "../../assets/hero/store.png";

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
];
const AllProduct = () => {
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
      </div>
    </div>
  );
};

export default AllProduct;
