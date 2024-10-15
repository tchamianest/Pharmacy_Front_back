import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UpdateMedical from "./updatemedical";
import { ToastContainer, toast } from "react-toastify";

const Medicals = () => {
  const [activeOne, setActiveOne] = useState("medicals");
  const notify = (message) => toast(`${message}`);
  const navigate = useNavigate();
  const [medical, setMedical] = useState([]);
  const [medicaldata, setmedicaldata] = useState();
  const users = JSON.parse(localStorage.getItem("user"));
  const Logout = () => {
    localStorage.removeItem("HeaderToken");
    localStorage.removeItem("user");
    navigate("/");
  };
  const handleClick = (data, el) => {
    setmedicaldata(el);
    setActiveOne(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "http://localhost:5000/api/product/medicals",
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: localStorage.getItem("HeaderToken"),
            },
          }
        );
        setMedical(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  if (activeOne === "update") {
    return (
      <div>
        <button
          className="text-blue-500 border p-2 px-3 hover:bg-blue-500 hover:text-white mt-[-20px] mb-0 cursor-pointer"
          onClick={() => handleClick("medical")}
        >
          back Button
        </button>
        <UpdateMedical medical={medicaldata} />
      </div>
    );
  }
  const handleDelete = async (id) => {
    try {
      const result = await axios.delete(
        `http://localhost:5000/api/product/delete/${id}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("HeaderToken"),
          },
        }
      );
      if (result) {
        notify("Product deleted success full ✅");
      }
    } catch (error) {
      notify(error.message);
    }
  };

  const handleUpdate = async (el) => {
    try {
      console.log(el, "id=========");
      const response = await axios.patch(
        "http://localhost:5000/api/product/update",

        { id: el.id, isAvailable: !el.isAvailable },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("HeaderToken"),
          },
        }
      );
      if (response.status === 200) {
        notify(`Product availability updated to ${!el.isAvailable}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <ToastContainer />
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
          {medical &&
            medical.map((el) => (
              <>
                <div className="flex justify-between w-[100%] items-center border-b p-2">
                  <div className="w-[20%]">
                    <p className="font-semibold ">{el.productName}</p>
                  </div>
                  <div className="w-[20%]">
                    <p className=""> {el.productPrice} rwf</p>
                  </div>
                  <button
                    onClick={() => handleUpdate(el)}
                    className={` ${
                      el.isAvailable
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-red-500 hover:bg-red-600"
                    } px-7 p-1 rounded-sm text-white text-sm `}
                  >
                    {el.isAvailable ? "UnAvailable" : "Available"}
                  </button>
                  <div className="flex gap-5 justify-end">
                    <button
                      className="bg-blue-600 px-10 p-1 rounded-sm text-white hover:bg-blue-700"
                      onClick={() => handleClick("update", el)}
                    >
                      Update{" "}
                    </button>
                    <button
                      onClick={() => handleDelete(el.id)}
                      className="bg-red-600 px-10 p-1 rounded-sm text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Medicals;
