import React, { useState, useEffect } from "react";
import axios from "axios";
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

  return (
    <div className="  ">
      {/* Top sections */}
      <div className="flex justify-between pr-20 p-3">
        <h1 className="font-medium text-2xl">Home dashboard</h1>
        <div className="flex  items-center gap-3">
          <img
            src={
              users.profileImage.length > 5
                ? `${users.profileImage}`
                : "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            }
            alt=""
            className="h-[50px] w-[50px] rounded-full"
          />
          <h1 className="font-medium text-[18px] text-blue-600">
            {users.name1} {users.name2}
          </h1>
        </div>
      </div>
      {/* Body section */}
      <div className=" flex pr-20 p-3 justify-between">
        <div className="w-[52%] mt-10 bg-gray-200 p-10 rounded-lg">
          <BArCharts chartData={chartData} />
        </div>
        <div className="bg-gray-200 w-[40%] mt-10 p-10 rounded-lg">
          <div className="flex  gap-10 items-center">
            <h1 className="text-2xl font-semibold text-primary/90 ">
              Full-Name:
            </h1>
            <h1 className="text-2xl font-ligther italic text-gray-700">
              {users.name1} {users.name2}
            </h1>
          </div>
          <div className="flex  gap-10 items-center mt-4">
            <h1 className="text-2xl font-semibold text-primary/90 ">Email:</h1>
            <h1 className="text-2xl font-ligther italic text-gray-700">
              {users.email}
            </h1>
          </div>
          <div className="flex  gap-10 items-center mt-4">
            <h1 className="text-2xl font-semibold text-primary/90 ">Phone:</h1>
            <h1 className="text-2xl font-ligther italic text-gray-700">
              {users.phone}
            </h1>
          </div>
          <div className="flex  gap-10 items-center mt-4">
            <h1 className="text-2xl font-semibold text-primary/90 ">
              Preferred Language:
            </h1>
            <h1 className="text-2xl font-ligther italic text-gray-700">
              {users.preferredLanguage}
            </h1>
          </div>
          <div className="flex  gap-10 items-center mt-4">
            <h1 className="text-2xl font-semibold text-primary/90 ">
              Location:
            </h1>
            <h1 className="text-2xl font-ligther italic text-gray-700">
              {users.Location}
            </h1>
          </div>
        </div>
      </div>
      {/* Down footer */}
    </div>
  );
}

export default HomeDash;
