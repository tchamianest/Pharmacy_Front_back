import React from "react";
import store from "../../assets/hero/store.png";

function Cardseacrh(props) {
  return (
    <div className="w-[80%] shadow-md max-h-[300px] bg-gray-200 p-5 rounded-sm ">
      <div className="flex gap-5">
        <div className="w-[20%]">
          <img src={props.image} alt="image" />
        </div>
        <div className="flex-1 ">
          <p className="font-bold text-2xl mb-3">{props.title}</p>
          <p className="text-xs">{props.description}</p>
          <div className="flex mt-5 gap-3">
            {props.location && (
              <p className="font-bold text-primary">Location :</p>
            )}
            <p>{props.location}</p>
          </div>

          {props.location && (
            <div className="flex justify-end mt-5 gap-3 left">
              <button className="p-3 text-right bg-primary/95 rounded-full text-white hover:bg-secondary">
                View Location
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cardseacrh;
