import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import { Data } from "../../utils/Data";
import BArCharts from "./BArCharts";

Chart.register(CategoryScale);

function HomeDash() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // fetch Profile of the user who logged in
  const users = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("HeaderToken");
    navigate("/");
  };
  return (
    <div className="  ">
      {/* Top sections */}
      <div className="flex justify-between pr-20 p-3 ">
        <h1 className="font-medium text-2xl">Home dashboard</h1>
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
      {/* Body section */}
      <div className=" flex pr-20 p-3 justify-between gap-2">
        <div className="w-[52%] mt-10  p-10 rounded-sm border-[1px]">
          <BArCharts chartData={chartData} />
        </div>
        <div className=" w-[49%] mt-10 p-10 rounded-sm border-[1px]">
          <div className="flex  gap-10 items-center  justify-between ">
            <h1 className="font-semibold text-black ">Full-Name:</h1>
            <h1 className=" font-ligther  text-gray-700 ">
              {users.name1} {users.name2}
            </h1>
          </div>
          <div className="flex  gap-10 items-center mt-4  justify-between">
            <h1 className=" font-semibold text-black ">Email:</h1>
            <h1 className=" font-ligther  text-gray-700">{users.email}</h1>
          </div>
          <div className="flex  gap-10 items-center mt-4  justify-between">
            <h1 className=" font-semibold text-black ">Phone:</h1>
            <h1 className=" font-ligther  text-gray-700">{users.phone}</h1>
          </div>
          <div className="flex  gap-10 items-center mt-4  justify-between">
            <h1 className=" font-semibold text-black ">Preferred Language:</h1>
            <h1 className=" ont-ligther  text-gray-700">
              {users.preferredLanguage}
            </h1>
          </div>
          <div className="flex  gap-10 items-center mt-4 justify-between">
            <h1 className=" font-semibold text-black ">Location:</h1>
            <h1 className=" font-ligther  text-gray-700">{users.Location}</h1>
          </div>
        </div>
      </div>
      {/* Down footer */}
    </div>
  );
}

export default HomeDash;
