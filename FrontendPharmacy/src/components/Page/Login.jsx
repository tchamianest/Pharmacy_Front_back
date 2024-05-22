import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setError] = useState("");
  const [formdata, setFormdata] = useState({
    firstname: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    profileImage: null,
    acceptTerm: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, file } = e.target;

    if (type === "checked") {
      setFormdata({ ...formdata, [name]: checked });
    } else if (type === "file") {
      setFormdata({ ...formdata, [name]: file[0] });
    } else {
      setFormdata({ ...formdata, [name]: value });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isSignUp) {
        if (formdata.password !== formdata.confirmPassword) {
          return setError("the password nust be the same");
        }
        setError("");
        const response = await axios.post(
          "http://localhost:5000/api/users/signup",
          {
            firstName: formdata.firstname,
            lastName: formdata.surname,
            email: formdata.email,
            password: formdata.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
      } else {
        if (formdata.email.length < 2) {
          return setError("email is required ");
        }
        if (formdata.password.length < 3) {
          return setError(
            "password should be alpanimeric.    \t   Example: Test@12345"
          );
        }
        setError("");
        const response = await axios.post(
          "http://localhost:5000/api/users/login",
          {
            email: formdata.email,
            password: formdata.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const user = {
          name1: response.data.user.firstName,
          name2: response.data.user.lastName,
          phone: response.data.user.phone,
          email: response.data.user.email,
          preferredLanguage: response.data.user.preferredLanguage,
          profileImage: response.data.user.profileImage,
          Location: response.data.user.whereYouLive,
        };
        localStorage.setItem("HeaderToken", response.data.token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      console.log(error.response.data.error);

      setError(` ${error.response.data.error}`);
    }
  };
  const switchModesign = () => {
    setError("");
    if (isSignUp === false) {
      setIsSignUp(true);
    } else {
      setIsSignUp(false);
    }
  };

  return (
    <div className=" flex items-center justify-center p-10 bg-gray-900 min-h-screen rounded-lg ">
      <div className="bg-gray-200 min-h-[600px]  flex p-10 justify-between lg:w-[60%] rounded-lg shadow-md ">
        <div
          className=" sm:flex  content-center 
         p-3 w-1/2 hidden lg:block  "
        >
          <h1 className="text-black z-1 font-bold text-2xl pl-10 ">
            {!isSignUp ? "Welcome Again Seller" : "SignUp to be a Seller"}
          </h1>
          <p className="text-gray-900 pl-10 pt-3">
            {!isSignUp
              ? "Hey there! 👋 It looks like we need to rekindle our connection. Let's bring your account back to life! Simply log in again to rediscover the world of possibilities waiting for you. Your pharmacy products are eagerly awaiting their spotlight. Reconnect now to continue your journey with us!"
              : "Welcome aboard! 🌟 Ready to elevate your pharmacy offerings? Join us as a seller and unlock a world of opportunities to showcase your products to a wider audience. From essential medications to wellness products, your inventory finds its perfect platform here. Let's collaborate to bring health and convenience to customers' doorsteps. Sign up now to start your journey with us!"}
          </p>
          <p className="text-1xl text-blue-900 pt-10 pl-10 font-bold">
            {!isSignUp
              ? "signup First to have the account to our page "
              : "If you Have account you can Login ?"}
          </p>
          <div className="flex text-black gap-4 pl-10 pt-3">
            <p>Click here to 👉 </p>
            <button
              className="text-blue-900 hover:text-primary hover:text-[17px]"
              onClick={switchModesign}
            >
              {isSignUp ? "Login" : "signUp"}
            </button>
          </div>
        </div>

        <div className="w-[100%] lg:w-1/2  relative">
          <div className="absolute top-0 min-w-[100%] ">
            {" "}
            <h1 className="text-center  text-blue-500 font-bold text-[30px]">
              {isSignUp ? "SignUp Page" : "Login Page"}
            </h1>
          </div>

          <div className="items-center flex justify-center h-[100%] mt-10">
            <form action="">
              <div>
                {isSignUp && (
                  <div className="grid grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="Firstname"
                      onChange={handleChange}
                      className="border border-gray-400 rounded-lg py-1 px-2"
                    />
                    <input
                      type="text"
                      name="surname"
                      placeholder="Surname"
                      onChange={handleChange}
                      className="border border-gray-400 rounded-lg py-1 px-2"
                    />
                  </div>
                )}

                <div className="mt-5">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="border border-gray-400 py-1 rounded-lg px-2 w-full"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="border rounded-lg border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                {isSignUp && (
                  <>
                    <div className="mt-5">
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        className="border rounded-lg border-gray-400 py-1 px-2 w-full"
                      />
                    </div>
                    <div className="mt-5">
                      <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        onChange={handleChange}
                        className="border rounded-lg border-gray-400 py-1 px-2 w-full"
                      />
                    </div>
                  </>
                )}
                <div className="mt-5 flex justify-between items-center">
                  <h1 className="text-center w-[100%] text-red-600">
                    {message}
                  </h1>
                </div>

                <div className="mt-5">
                  <input
                    type="checkbox"
                    name="checked"
                    onChange={handleChange}
                    className="border rounded-lg border-gray-400"
                  />
                  <span className="text-black">
                    I accept the{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <div className="mt-5">
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className="w-full rounded-lg bg-secondary hover:bg-primary py-3 text-center text-white"
                  >
                    {isSignUp ? "Register Now" : "Login"}
                  </button>
                </div>
                <div className=" flex text-black gap-4  pt-3  justify-between sm:hidden">
                  <p>Click here to 👉 </p>
                  <button
                    className="text-blue-900 hover:text-primary hover:text-[17px]"
                    onClick={switchModesign}
                  >
                    {isSignUp ? "Login" : "signUp"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
