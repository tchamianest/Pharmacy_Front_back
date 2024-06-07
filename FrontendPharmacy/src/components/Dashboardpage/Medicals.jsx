import React from "react";
import { useNavigate } from "react-router-dom";

const Medicals = () => {
  const users = JSON.parse(localStorage.getItem("user"));
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="">
      <div className="flex justify-between pr-20 p-3">
        <h1 className="font-medium text-2xl">Medical List</h1>
        <div className="flex  items-center gap-3 border-[1px] p-2 px-5">
          <img
            src={
              users.profileImage.length > 5
                ? `${users.profileImage}`
                : "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            }
            alt=""
            className="h-[50px] w-[50px] rounded-full"
          />
          <div>
            <h1 className="font-medium text-[18px] text-blue-600">
              {users.name1} {users.name2}
            </h1>
            <button className="hover:text-blue-900" onClick={Logout}>
              LogOut
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex justify-center mt-10">
        <div className="w-[80%]  h-[80%] border-[1px] overflow-auto py-10 px-5 max-h-[65vh]">
          <div className="flex justify-between w-[100%] items-center border-b p-2">
            <p className="font-semibold ">Medical Name</p>
            <p className=""> 3000 rwf</p>
            <p className="">Items : 10 </p>
            <div className="flex gap-5 justify-end">
              <button className="bg-blue-600 px-10 p-1 rounded-sm text-white hover:bg-blue-700">
                Update{" "}
              </button>
              <button className="bg-red-600 px-10 p-1 rounded-sm text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between w-[100%] items-center border-b p-2">
            <p className="font-semibold ">Medical Name</p>
            <p className=""> 3000 rwf</p>
            <p className="">Items : 10 </p>
            <div className="flex gap-5 justify-end">
              <button className="bg-blue-600 px-10 p-1 rounded-sm text-white hover:bg-blue-700">
                Update{" "}
              </button>
              <button className="bg-red-600 px-10 p-1 rounded-sm text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between w-[100%] items-center border-b p-2">
            <p className="font-semibold ">Medical Name</p>
            <p className=""> 3000 rwf</p>
            <p className="">Items : 10 </p>
            <div className="flex gap-5 justify-end">
              <button className="bg-blue-600 px-10 p-1 rounded-sm text-white hover:bg-blue-700">
                Update{" "}
              </button>
              <button className="bg-red-600 px-10 p-1 rounded-sm text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between w-[100%] items-center border-b p-2">
            <p className="font-semibold ">Medical Name</p>
            <p className=""> 3000 rwf</p>
            <p className="">Items : 10 </p>
            <div className="flex gap-5 justify-end">
              <button className="bg-blue-600 px-10 p-1 rounded-sm text-white hover:bg-blue-700">
                Update{" "}
              </button>
              <button className="bg-red-600 px-10 p-1 rounded-sm text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between w-[100%] items-center border-b p-2">
            <p className="font-semibold ">Medical Name</p>
            <p className=""> 3000 rwf</p>
            <p className="">Items : 10 </p>
            <div className="flex gap-5 justify-end">
              <button className="bg-blue-600 px-10 p-1 rounded-sm text-white hover:bg-blue-700">
                Update{" "}
              </button>
              <button className="bg-red-600 px-10 p-1 rounded-sm text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between w-[100%] items-center border-b p-2">
            <p className="font-semibold ">Medical Name</p>
            <p className=""> 3000 rwf</p>
            <p className="">Items : 10 </p>
            <div className="flex gap-5 justify-end">
              <button className="bg-blue-600 px-10 p-1 rounded-sm text-white hover:bg-blue-700">
                Update{" "}
              </button>
              <button className="bg-red-600 px-10 p-1 rounded-sm text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between w-[100%] items-center border-b p-2">
            <p className="font-semibold ">Medical Name</p>
            <p className=""> 3000 rwf</p>
            <p className="">Items : 10 </p>
            <div className="flex gap-5 justify-end">
              <button className="bg-blue-600 px-10 p-1 rounded-sm text-white hover:bg-blue-700">
                Update{" "}
              </button>
              <button className="bg-red-600 px-10 p-1 rounded-sm text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between w-[100%] items-center border-b p-2">
            <p className="font-semibold ">Medical Name</p>
            <p className=""> 3000 rwf</p>
            <p className="">Items : 10 </p>
            <div className="flex gap-5 justify-end">
              <button className="bg-blue-600 px-10 p-1 rounded-sm text-white hover:bg-blue-700">
                Update{" "}
              </button>
              <button className="bg-red-600 px-10 p-1 rounded-sm text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between w-[100%] items-center border-b p-2">
            <p className="font-semibold ">Medical Name</p>
            <p className=""> 3000 rwf</p>
            <p className="">Items : 10 </p>
            <div className="flex gap-5 justify-end">
              <button className="bg-blue-600 px-10 p-1 rounded-sm text-white hover:bg-blue-700">
                Update{" "}
              </button>
              <button className="bg-red-600 px-10 p-1 rounded-sm text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between w-[100%] items-center border-b p-2">
            <p className="font-semibold ">Medical Name</p>
            <p className=""> 3000 rwf</p>
            <p className="">Items : 10 </p>
            <div className="flex gap-5 justify-end">
              <button className="bg-blue-600 px-10 p-1 rounded-sm text-white hover:bg-blue-700">
                Update{" "}
              </button>
              <button className="bg-red-600 px-10 p-1 rounded-sm text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between w-[100%] items-center border-b p-2">
            <p className="font-semibold ">Medical Name</p>
            <p className=""> 3000 rwf</p>
            <p className="">Items : 10 </p>
            <div className="flex gap-5 justify-end">
              <button className="bg-blue-600 px-10 p-1 rounded-sm text-white hover:bg-blue-700">
                Update{" "}
              </button>
              <button className="bg-red-600 px-10 p-1 rounded-sm text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between w-[100%] items-center border-b p-2">
            <p className="font-semibold ">Medical Name</p>
            <p className=""> 3000 rwf</p>
            <p className="">Items : 10 </p>
            <div className="flex gap-5 justify-end">
              <button className="bg-blue-600 px-10 p-1 rounded-sm text-white hover:bg-blue-700">
                Update{" "}
              </button>
              <button className="bg-red-600 px-10 p-1 rounded-sm text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicals;
