import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateMedical(props) {
  console.log("medicals id", props.medical);
  const notify = (message) => toast(`${message}`);
  const users = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };
  const initialstate = {
    name: props.medical.productName,
    price: props.medical.productPrice,
    description: props.medical.productDescription,
    image: null,
  };
  const final = {
    name: "",
    price: "",
    description: "",
    image: null,
  };
  const [data, setData] = useState(initialstate);
  const fileInputRef = useRef(null);
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

  ///CREATE PRODUCT
  const formdata = new FormData();
  formdata.append("id", props.medical.id);
  formdata.append("productName", data.name);
  formdata.append("productDescription", data?.description);
  formdata.append("productPrice", data?.price);
  formdata.append("productImage", data?.image);
  const onsubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.patch(
        "http://localhost:5000/api/product/update",

        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("HeaderToken"),
          },
        }
      );

      if (response) {
        setData(final);
        fileInputRef.current.value = "";
        notify(`PRODUCT Updated ✅`);
        window.location.reload();
      }
    } catch (error) {
      notify(error.response.data.Error);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="flex justify-between pr-20 p-3">
        <h1 className="font-medium text-2xl">Update Page</h1>
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
        <form className=" bg-gray-100 p-6 w-[80%]" onSubmit={onsubmit}>
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">Product Name :</p>
            <input
              type="text"
              placeholder="First Name"
              name="name"
              value={data.name}
              onChange={(event) => changeHandle(event)}
              className="w-[70%] p-1 rounded-sm"
            />
          </div>
          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">Product Price :</p>
            <input
              type="text"
              placeholder="Last Name"
              name="price"
              value={data.price}
              onChange={(event) => changeHandle(event)}
              className="w-[70%] p-1 rounded-sm"
            />
          </div>

          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">
              Product description :
            </p>
            <textarea
              type="text-area"
              placeholder="Phone number"
              name="description"
              value={data.description}
              onChange={(event) => changeHandle(event)}
              className="w-[70%] p-1 rounded-sm h-40"
            />
          </div>

          <div className="flex gap-10 item-center content-center justify-between w-[90%] m-5">
            <p className="text-black font-semibold p-2">Product Image :</p>
            <input
              type="file"
              placeholder="Product image"
              name="image"
              ref={fileInputRef}
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

export default UpdateMedical;
