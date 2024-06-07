import React from "react";
import { useNavigate } from "react-router-dom";

function PostMedical() {
  const users = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-between pr-20 p-3">
        <h1 className="font-medium text-2xl">Post Medical Dashboard</h1>
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
      <div className="m-10 ">
        <div className=" bg-gray-100 p-6 w-[80%]">
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">First Name :</p>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              className="w-[70%] p-1 rounded-sm"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">Last Name :</p>
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              className="w-[70%] p-1 rounded-sm"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">Preferred language :</p>
            <input
              type="text "
              placeholder="Prefferred Language"
              name="language"
              className="w-[70%] p-1 rounded-sm"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">Medical Price :</p>
            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              className="w-[70%] p-1 rounded-sm"
            />
          </div>

          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">Product Image :</p>
            <input
              type="file"
              placeholder="Profile image"
              name="image"
              className="w-[70%] p-1 rounded-sm"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <div></div>
            <div className="flex justify-between w-[70%] gap-4">
              <button className="py-2 w-[50%] rounded-sm hover:bg-blue-700 bg-blue-500 text-white font-bold">
                <a href="#" className="text-white font-bold">
                  Cancel
                </a>
              </button>
              <button className="py-2 w-[50%] font-bold text-white bg-primary/80 hover:bg-primary  rounded-sm ">
                Save Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostMedical;
