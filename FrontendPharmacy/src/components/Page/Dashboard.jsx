import React, { useState } from "react";
import HomeDash from "../Dashboardpage/HomeDash";
import Analytics from "../Dashboardpage/Analytics";
import Inbox from "../Dashboardpage/Inbox";
import Medicals from "../Dashboardpage/Medicals";
import PostMedical from "../Dashboardpage/PostMedical";
import Setting from "../Dashboardpage/Setting";

function Dashboard() {
  const [open, setOpen] = useState(true);
  const [display, setDisplay] = useState(<HomeDash />);
  const Menus = [
    { title: "Home", src: "Chart", clicked: false },
    { title: "Inbox", src: "Chat", clicked: false },
    { title: "Medicals", src: "User", clicked: false },
    { title: "PostMedical ", src: "Calendar", clicked: false },
    { title: "Analytics", src: "Chart", clicked: false },
    { title: "Files ", src: "Folder", gap: true, clicked: false },
    { title: "Setting", src: "Setting", clicked: false },
  ];
  const [menu, setMenus] = useState(Menus);
  const handleItemClick = (index) => {
    const clickedItem = Menus[index];
    const updatedMenus = Menus.map((menu, i) => {
      if (i === index) {
        return { ...menu, clicked: true };
      } else {
        return { ...menu, clicked: false };
      }
    });
    setMenus(updatedMenus);
    console.log(Menus);
    switch (clickedItem.title) {
      case "Home":
        setDisplay(<HomeDash />);
        break;
      case "Inbox":
        setDisplay(<Inbox />);
        break;
      case "Medicals":
        setDisplay(<Medicals />);
        break;
      case "PostMedical":
        setDisplay(<PostMedical />);
        break;
      case "Analytics":
        setDisplay(<Analytics />);
        break;
      case "Setting":
        setDisplay(<Setting />);
        break;
      default:
        setDisplay(<HomeDash />);
        break;
    }
  };
  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-4 relative duration-300 bg-blue-600`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]" && "max-w-[30px]"
            }`}
            onClick={() => setDisplay(<HomeDash />)}
          />
          <h1
            className={`text-white text-2xl origin-left font-medium  duration-200 ${
              !open && "scale-0"
            }`}
          >
            Rwanda Pharmacy
          </h1>
        </div>
        <ul className="pt-6">
          {menu.map((Menu, index) => (
            <li
              key={index}
              className={`flex ${
                Menu.clicked === true
                  ? " bg-primary/80 text-white"
                  : "bg-transparent"
              }  rounded-md ${
                !open && "hover:bg-primary"
              } p-2 cursor-pointer  hover:bg-light-white text-black  text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
              onClick={() => handleItemClick(index)}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 hover:text-primary hover:text-[20px]`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">{display}</div>
    </div>
  );
}

export default Dashboard;
