import { useEffect, useState } from "react";
import DarkMode from "./DarkMode";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

//MENU ARRAY
const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Medical", link: "/product" },
  { id: 3, name: "Doctors", link: "/#" },
  { id: 4, name: "Region", link: "/#" },
  { id: 4, name: "Menu", link: "/#" },
];

const Dropdownlink = [
  { id: 1, name: "E-testing", link: "/#" },
  { id: 1, name: "help", link: "/#" },
  { id: 1, name: "Voice Call", link: "/#" },
];
const Navbar = () => {
  const [Search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleKeyDown = (events) => {
    if (events.key === "Enter") {
      navigate(`/Search?name=${Search}`);
    }
  };
  function handleClick(e) {
    e.preventDefault();
    navigate(`/Search?name=${Search}`);
  }
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const data = JSON.parse(userData);
      setUser(data);
    }
  }, []);
  const [showMenu, setMenu] = useState(false);
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40 top-0 sticky w-screen">
      {/* Upper Navabar */}
      <div className="bg-primary/20 py-2 flex">
        <div className="container justify-between flex items-center">
          <div className="">
            <a
              href="/"
              className="font-bold sm:text-1xl text-[12px] sm:text-2xl flex gap-2 text-blue-400 dark:text-white"
            >
              <img src={Logo} alt="Logo" className="sm:w-10 w-7" />
              Rwanda Pharmacy
            </a>
          </div>
          {/* Search bar and order button */}
          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search Medical..."
                onKeyDown={handleKeyDown}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[200px] dark:border-gray-500 dark:bg-gray-800 sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-sm h-9 border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch
                onClick={handleClick}
                className="text-gray-500 cursor-pointer absolute top-1/2 -translate-y-1/2
               group-hover:text-primary  right-2"
              />
            </div>
            {/* <button
              onClick={() => alert("The order feature is not yet available ")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group "
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className=" text-xl text-white drop-shadow-sm cursor-pointer" />
            </button> */}
            {/* dark mode switch  */}
            <div>
              <DarkMode />
              <img src="" alt="" />
            </div>
          </div>
          {/* Order button  */}
        </div>
      </div>
      {/* Lower Navbar */}
      <div className=" justify-center flex ">
        <ul className="sm:flex hidden items-center gap-4 py-1">
          {Menu.map((data) => (
            <>
              <li key={data.id}>
                <a
                  href={data.link}
                  className=" iniline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </a>
              </li>
            </>
          ))}

          {/* Simple Dropdown */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Product
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute shadow-md z-[9999] hidden group-hover:block w-[155px] rounded-md bg-white text-black py-2 ">
              {Dropdownlink.map((el) => (
                <>
                  <li key={el.id}>
                    <a
                      href={el.link}
                      className="iniline-block  w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {el.name}
                    </a>
                  </li>
                </>
              ))}
            </div>
          </li>
          <li className="px-5">
            {!user ? (
              <button className=" text-white bg-primary px-4 py-1  hover:bg-primary/70 rounded-sm">
                <a href="/login">Login </a>
              </button>
            ) : (
              <a href="/dashboard">
                <div className="flex justify-center items-center cursor-pointer gap-3 py-1 my-3  px-3">
                  <img
                    src={user.profileImage}
                    alt="Image"
                    className="w-[40px] rounded-full h-[40px] object-cover"
                  />
                  <a href="/dashboard" className="hover:text-blue-600">
                    {user.name2}
                  </a>
                </div>
              </a>
            )}
          </li>
        </ul>
        <div className="sm:hidden w-full justify-center relative  flex  px-3 items-center gap-10 bg-gray-800 p-3">
          <div className="group relative max-w-[70%] ">
            <input
              type="text"
              placeholder="search ..."
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[150px] dark:border-gray-500 dark:bg-gray-800 sm:w-[130px] group-hover:w-[200px] transition-all duration-300 rounded-sm h-7 tex-[10px] border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
            />
            <IoMdSearch
              onClick={handleClick}
              className="text-gray-500 cursor-pointer absolute top-1/2 -translate-y-1/2
               group-hover:text-primary  right-2"
            />
          </div>
          <div className="flex-1  ">
            <img
              src="./menu.png"
              alt=""
              className="h-[20px] float-end cursor-pointer"
              onClick={() => setMenu(!showMenu)}
            />
            {showMenu && (
              <div className=" p-5 duration-200 bg-gray-800 w-[200px] absolute top-12 right-0 ">
                <div className="w-full ">
                  <ul className="flex justify-center items-center flex-col ">
                    <li className="py-2 flex justify-end hover:text-blue-800 text-white   w-[60%]">
                      <a href="/product">Product</a>
                    </li>
                    <li className="py-2 flex justify-end hover:text-blue-800 text-white  w-[60%]">
                      <a href="/product">Meadical</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
