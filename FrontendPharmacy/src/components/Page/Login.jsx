import React, { useState } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const switchModesign = () => {
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
            <div>
              {isSignUp && (
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Firstname"
                    className="border border-gray-400 rounded-lg py-1 px-2"
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    className="border border-gray-400 rounded-lg py-1 px-2"
                  />
                </div>
              )}

              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-gray-400 py-1 rounded-lg px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded-lg border-gray-400 py-1 px-2 w-full"
                />
              </div>
              {isSignUp && (
                <>
                  <div className="mt-5">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="border rounded-lg border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                  <div className="mt-5">
                    <input
                      type="text"
                      placeholder="Location"
                      className="border rounded-lg border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                  <div className="mt-5 flex justify-between items-center">
                    <p className="text-black/70 font-bold">Profile image :</p>
                    <input
                      type="file"
                      placeholder="profile Image"
                      className="border rounded-lg border-gray-400 py-1 px-2 "
                    />
                  </div>
                </>
              )}

              <div className="mt-5">
                <input
                  type="checkbox"
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
                <button className="w-full rounded-lg bg-secondary hover:bg-primary py-3 text-center text-white">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
