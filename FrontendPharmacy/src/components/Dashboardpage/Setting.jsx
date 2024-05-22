import React, { useEffect, useState } from "react";
import axios from "axios";

import TopSection from "./TopSection";
const Setting = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    language: "",
    phone: "",
    image: null,
    whereYouLive: "",
  });
  const getlocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve(`Latitude: ${latitude}, Longitude: ${longitude}`);
          },
          (error) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                reject("User denied the request for Geolocation.");
                break;
              case error.POSITION_UNAVAILABLE:
                reject("Location information is unavailable.");
                break;
              case error.TIMEOUT:
                reject("The request to get user location timed out.");
                break;
              default:
                reject("An unknown error occurred.");
                break;
            }
          }
        );
      } else {
        reject("Geolocation is not supported by this browser.");
      }
    });
  };
  useEffect(() => {
    const location = async () => {
      const location = await getlocation();
      setData({ ...data, ["whereYouLive"]: location });
    };
    location();
  });
  const changeHandle = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setData({ ...data, [name]: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const Submitbutton = async (event) => {
    event.preventDefault();
    console.log(data);

    const response = await axios.patch(
      "http://localhost:5000/api/users/profiles",

      {
        firstName: data.firstname,
        lastName: data.lastname,
        email: data.email,
        profileImage: data.image,
        phone: data.phone,
        preferredLanguage: data.language,
        whereYouLive: data.whereYouLive,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("HeaderToken"),
        },
      }
    );
    console.log(response);
  };
  return (
    <div>
      <TopSection name="Profile Page Editing" />
      <div className="m-10 ">
        <div className=" bg-gray-100 p-6 w-[80%]">
          <div className="flex gap-10 item-center content-center justify-between w-[70%] m-5">
            <p className="text-black font-bold p-2">First Name :</p>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              onChange={(event) => changeHandle(event)}
              className="w-[70%] p-2 rounded-lg"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[70%] m-5">
            <p className="text-black font-bold p-2">Last Name :</p>
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              onChange={changeHandle}
              className="w-[70%] p-2 rounded-lg"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[70%] m-5">
            <p className="text-black font-bold p-2">Preferred language :</p>
            <input
              type="text "
              placeholder="Prefferred Language"
              name="language"
              onChange={(event) => changeHandle(event)}
              className="w-[70%] p-2 rounded-lg"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[70%] m-5">
            <p className="text-black font-bold p-2">Phone Number :</p>
            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              onChange={(event) => changeHandle(event)}
              className="w-[70%] p-2 rounded-lg"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[70%] m-5">
            <p className="text-black font-bold p-2">Email :</p>
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={changeHandle}
              className="w-[70%] p-2 rounded-lg"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[70%] m-5">
            <p className="text-black font-bold p-2">Profile Image :</p>
            <input
              type="file"
              placeholder="Profile image"
              name="image"
              onChange={(event) => changeHandle(event)}
              className="w-[70%] p-2 rounded-lg"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[70%] m-5">
            <div></div>
            <div className="flex justify-between w-[70%]">
              <button className="py-3 w-[30%] rounded-lg hover:bg-blue-700 bg-blue-500 text-white font-bold">
                <a href="#" className="text-white font-bold">
                  Cancel
                </a>
              </button>
              <button
                className="py-3 w-[30%] font-bold text-white bg-primary/80 hover:bg-primary  rounded-lg "
                onClick={(e) => Submitbutton(e)}
              >
                Save Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
