import { useNavigate } from "react-router-dom";

function TopSection(props) {
  const users = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="flex justify-between pr-20 p-3">
      <h1 className="font-medium text-2xl">{props.name}</h1>
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
  );
}

export default TopSection;
