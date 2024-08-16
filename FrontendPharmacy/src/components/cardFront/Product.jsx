/* eslint-disable react/prop-types */

const Product = (props) => {
  return (
    <div className="rounded-xl shadow-lg w-[280px] m-2 dark:bg-transparent/30  border h-[350px] bg-white">
      <div className="p-3 flex flex-col justify-between h-full">
        <div className="rounded-t-xl overflow-hidden h-[180px] w-full">
          <img
            src={props.productImage}
            alt=""
            className="object-cover w-full"
          />
        </div>
        <h5 className="text-1xl md:text-1xl  font-medium mt-2 dark:text-white text-black  capitalize">
          {props.productName}
        </h5>
        <div className="flex gap-3 mt-0">
          <p className="text-slate-500 text-sm mt-1 text-center ">
            {props.SellerName}
          </p>
        </div>
        <div className="flex gap-3 mt-0">
          <p className="text-gray-700 text-sm text-center font-bold mt-0 ">
            Location :
          </p>
          <p className="text-slate-500 text-sm text-center mt-0 ">
            {props.location}
          </p>
        </div>
        <div className="flex gap-3 mt-0">
          <p className="text-gray-700 text-sm  text-center font-bold mt-0 ">
            Price :
          </p>
          {/* change */}
          <p className="text-slate-500 text-sm text-center mt-0 mb-3">
            {props.price} RWF
          </p>
        </div>
        <a
          href={`/product?id=${props.id}`}
          className="text-center hover:bg-primary px-5 py-1 sm:mt-10 mt-4 bg-blue-500 text-white font-bold p-1 rounded-xl "
        >
          {" "}
          View Location
        </a>
      </div>
    </div>
  );
};

export default Product;
