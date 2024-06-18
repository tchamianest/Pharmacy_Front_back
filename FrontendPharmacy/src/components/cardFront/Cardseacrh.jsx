import React from "react";
import store from "../../assets/hero/store.png";

function Cardseacrh() {
  return (
    <div className="w-[80%] shadow-md bg-gray-200 p-5 rounded-sm ">
      <div className="flex gap-5">
        <div className="w-[20%]">
          <img src={store} alt="image" />
        </div>
        <div className="flex-1 ">
          <p className="font-bold text-2xl">Product Title</p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            deleniti omnis ab, commodi, dicta eveniet culpa, perspiciatis
            ratione eligendi delectus facere quisquam possimus soluta dolorum at
            nihil architecto ipsum option.
          </p>
          <div className="flex mt-5 gap-3">
            <p className="font-bold text-primary">Location :</p>
            <p>Kamonyi Rwanda South</p>
          </div>
          <div className="flex justify-end mt-5 gap-3 left">
            <button className="p-3 text-right bg-primary/95 rounded-full text-white hover:bg-secondary">
              View Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardseacrh;
