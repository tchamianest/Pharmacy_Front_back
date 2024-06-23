import React, { useState } from "react";
import TopSection from "./TopSection";
import ProfilePage from "../Dashboardpage/Profile";
import Password from "./Password";

function Setting() {
  const [activeOne, setActiveOne] = useState("Setting");

  const handleClick = (data) => {
    setActiveOne(data);
  };
  if (activeOne === "Profile") {
    return (
      <div>
        <h1
          className="text-blue-500 mt-[-20px] mb-0 cursor-pointer"
          onClick={() => handleClick("Setting")}
        >
          back to setting{" "}
        </h1>
        <ProfilePage />
      </div>
    );
  } else if (activeOne === "password") {
    return (
      <div>
        <h1
          className="text-blue-500 mt-[-20px] mb-0 cursor-pointer"
          onClick={() => handleClick("Setting")}
        >
          back to setting{" "}
        </h1>
        <Password />
      </div>
    );
  }
  return (
    <div>
      <TopSection name="Setting" />
      <div className="w-full flex flex-col gap-10 items-center justify-center mt-5">
        <div
          className="bg-blue-600 w-[60%] rounded-sm min-h-[200px] flex flex-col items-center justify-center cursor-pointer hover:scale-105 duration-200"
          onClick={() => handleClick("Profile")}
        >
          <img src="./profile.png" alt="" className="w-[100px] mt-10" />
          <h1 className="mt-5 text-2xl text-white font-bold">Edit Profile</h1>
        </div>
        <div
          onClick={() => handleClick("password")}
          className="bg-red-600  w-[60%] rounded-sm min-h-[200px] flex flex-col items-center justify-center cursor-pointer hover:scale-105 duration-200"
        >
          <img src="./password.png" alt="" className="w-[100px] mt-10" />
          <h1 className="mt-5 text-2xl text-white font-bold">Edit Password</h1>
        </div>
      </div>
    </div>
  );
}

export default Setting;
