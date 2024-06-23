import { useState } from "react";
import TopSection from "./TopSection";

function Password() {
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
  return (
    <div>
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
