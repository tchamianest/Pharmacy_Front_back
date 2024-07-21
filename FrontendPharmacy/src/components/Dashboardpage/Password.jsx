import { useState } from "react";
import TopSection from "./TopSection";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Password() {
  const notify = (message) => toast(`${message}`);
  const [error, setError] = useState(null);
  const initialstate = {
    old: "",
    new: "",
    confirm: "",
  };
  const [data, setData] = useState(initialstate);
  const changeHandle = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (data.old === data.new) {
      return setError("old password Must be different from new one");
    } else if (data.new !== data.confirm) {
      return setError("new password must be the same as the confirm");
    }
    try {
      const response = await axios.patch(
        "http://localhost:5000/api/users/updatepassword",

        {
          oldPassword: data.old,
          newPassword: data.new,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("HeaderToken"),
          },
        }
      );
      if (response) {
        setData(initialstate);
        notify(`Password Updated  ✅`);
      }
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      // notify(error.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      <TopSection name="Change Password Page" />
      <div className="w-full flex justify-center items-center">
        <form className=" bg-gray-100 p-6 w-[80%]" onSubmit={onsubmit}>
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">Old Password :</p>
            <input
              type="password"
              placeholder="Enter Old Password"
              name="old"
              value={data.old}
              onChange={(event) => changeHandle(event)}
              className="w-[70%] p-1 rounded-sm"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">New password :</p>
            <input
              type="password"
              placeholder="Enter new Password"
              name="new"
              value={data.new}
              onChange={(event) => changeHandle(event)}
              className="w-[70%] p-1 rounded-sm"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">Confirm Password :</p>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirm"
              value={data.confirm}
              onChange={(event) => changeHandle(event)}
              className="w-[70%] p-1 rounded-sm"
            />
          </div>
          {error && (
            <div className="w-[90%] ml-7 text-red-600">
              {" "}
              <span className="font-bold text-black">Error:</span> {error}
            </div>
          )}
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <div className="flex justify-between w-[70%] gap-4">
              <button className="py-2 w-[50%] rounded-sm hover:bg-blue-700 bg-blue-500 text-white font-bold">
                <a href="#" className="text-white font-bold">
                  Cancel
                </a>
              </button>
              <button
                className="py-2 w-[50%] font-bold text-white bg-primary/80 hover:bg-primary  rounded-sm "
                type="submit"
              >
                Save Data
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Password;
