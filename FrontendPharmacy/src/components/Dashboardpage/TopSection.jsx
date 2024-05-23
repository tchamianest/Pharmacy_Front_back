import React from "react";
function TopSection(props) {
  const users = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex justify-between pr-20 p-3">
      <h1 className="font-medium text-2xl">{props.name}</h1>
      <div className="flex  items-center gap-3">
        <img
          src={
            users.profileImage.length > 5
              ? `${users.profileImage}`
              : "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
          }
          alt=""
          className="h-[50px] w-[50px] rounded-full"
        />
        <h1 className="font-medium text-[18px] text-blue-600">
          {users.name1} {users.name2}
        </h1>
      </div>
    </div>
  );
}

export default TopSection;
