import React from "react";
import DarkMode from "./DarkMode";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

//MENU ARRAY
const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Medical", link: "/#" },
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
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40 top-0 sticky w-screen">
      {/* Upper Navabar */}
      <div className="bg-primary/20 py-2 flex">
        <div className="container justify-between flex items-center">
          <div>
            <a
              href="#"
              className="font-bold text-1xl sm:text-2xl flex gap-2 text-blue-400 dark:text-white"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              Rwanda Pharmacy
            </a>
          </div>
          {/* Search bar and order button */}
          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search Medical..."
                className="w-[200px] dark:border-gray-500 dark:bg-gray-800 sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full h-9 border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch
                className="text-gray-500 absolute top-1/2 -translate-y-1/2
               group-hover:text-primary  right-2"
              />
            </div>
            <button
              onClick={() => alert("The order feature is not yet available ")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group "
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className=" text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* dark mode switch  */}
            <div>
              <DarkMode />
            </div>
          </div>
          {/* Order button  */}
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center ">
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
            <button className=" text-white bg-primary px-4 py-1  hover:bg-primary/70 rounded-2xl">
              <a href="#">Login </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
