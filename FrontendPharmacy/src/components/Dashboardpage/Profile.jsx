import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { getlocation } from "../../utils/locationFunction";
import { reverseGeocode } from "../../utils/ApiReverse";

import TopSection from "./TopSection";
const ProfilePage = () => {
  const notify = (message) => toast(`${message}`);
  const initialstate = {
    firstname: "",
    lastname: "",
    language: "",
    phone: "",
    image: null,
    location: "",
    whereYouLive: "",
  };
  const [data, setData] = useState(initialstate);
  useEffect(() => {
    const location = async () => {
      const locationString = await getlocation();
      const data = locationString.split(" ");
      const Lat = Number(data[1].slice(0, -1));
      const Long = Number(data[3]);
      const locationName = await reverseGeocode(Lat, Long);
      setData((prevData) => ({
        ...prevData,
        whereYouLive: locationString,
        location: locationName,
      }));
    };
    location();
  }, []);
  const changeHandle = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const formdata = new FormData();
  formdata.append("firstName", data.firstname);
  formdata.append("lastName", data.lastname);
  formdata.append("profileImage", data.image);
  formdata.append("phone", data.phone);
  formdata.append("location", data.location);
  formdata.append("preferredLanguage", data.language);
  formdata.append("whereYouLive", data.whereYouLive);

  const Submitbutton = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.patch(
        "http://localhost:5000/api/users/profiles",

        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("HeaderToken"),
          },
        }
      );
      console.log(response.data.user);
      const user = {
        name1: response.data.user.firstName,
        name2: response.data.user.lastName,
        phone: response.data.user.phone,
        email: response.data.user.email,
        preferredLanguage: response.data.user.preferredLanguage,
        profileImage: response.data.user.profileImage,
        Location: response.data.user.location,
      };
      localStorage.setItem("user", JSON.stringify(user));
      setData(initialstate);
      notify(`${response.data.message}`);
    } catch (error) {
      notify(error.response.data.Error);
    }
  };
  return (
    <div>
      <TopSection name="Profile Page Editing" />
      <ToastContainer />
      <div className="m-10 ">
        <div className=" bg-gray-100 p-6 w-[80%]">
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">First Name :</p>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={data.firstname}
              onChange={(event) => changeHandle(event)}
              className="w-[70%] p-1 rounded-sm"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">Last Name :</p>
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={data.lastname}
              onChange={changeHandle}
              className="w-[70%] p-1 rounded-sm"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">Preferred language :</p>
            <input
              type="text "
              placeholder="Prefferred Language"
              name="language"
              value={data.language}
              onChange={(event) => changeHandle(event)}
              className="w-[70%] p-1 rounded-sm"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">Phone Number :</p>
            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              value={data.phone}
              onChange={(event) => changeHandle(event)}
              className="w-[70%] p-1 rounded-sm"
            />
          </div>

          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">Profile Image :</p>
            <input
              type="file"
              placeholder="Profile image"
              name="image"
              onChange={(event) => changeHandle(event)}
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
              <button
                className="py-2 w-[50%] font-bold text-white bg-primary/80 hover:bg-primary  rounded-sm "
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

export default ProfilePage;
