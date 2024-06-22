/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ItemsContainer from "./additionalItems/ItemsContainer";
import SocialIcons from "./additionalItems/SocialIcons";
import { Icons } from "./additionalItems/data";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [Search, setSearch] = useState("");

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
  return (
    <footer className="bg-gray-900 text-white pt-20">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
       md:w-2/5 "
        >
          <span className="text-teal-400">Life</span> First
        </h1>
        <div>
          <input
            onKeyDown={handleKeyDown}
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Medical name ..."
            className="w-[200px] hover:w-[300px] focus:w-[300px] dark:border-gray-500 dark:bg-gray-800 sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-sm h-9 border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 mr-10 focus:border-primary"
          />
          <button
            onClick={handleClick}
            className="bg-primary hover:bg-secondary duration-200 px-5 py-2 font-[Poppins]
          text-white md:w-auto w-full rounded-sm"
          >
            Search
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
    text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© {new Date().getFullYear()} School Project.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
