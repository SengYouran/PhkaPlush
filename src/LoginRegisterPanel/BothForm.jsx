import React, { useState } from "react";
import ChildForm from "./ChildForm";
import Register from "./Register";
import { useControlData } from "../Context";
import Login from "./Login";
function BothForm() {
  const [isLogin, setIsLogin] = useState(false);
  const {
    showLogin,
    showRegister,
    setShowRegister,
    setBgLoginRegister,
    bgLoginRegister,
  } = useControlData();
  return (
    <div
      className={`transition-all duration-400 ease-in-out  relative -z-50 opacity-0 ${
        showLogin ? "z-50 opacity-100 " : ""
      }`}
    >
      <div
        className="container_bothFrom fixed bg-white w-[500px] h-[100vh] top-1/2 left-1/2 transform -translate-1/2 overflow-y-auto
     rounded-sm z-10"
      >
        <ChildForm />
      </div>
      <div
        className={`container_bothFrom fixed w-[400px] h-[100vh] -z-30 bg-white top-1/2 left-1/2 transform -translate-1/2 overflow-y-auto px-8 
          ${showRegister ? " z-40" : ""}`}
      >
        <div className="float-right mx-4 mt-2">
          <i
            className="fa-solid fa-xmark text-2xl cursor-pointer mt-2"
            onClick={() => {
              setShowRegister(false);
              setBgLoginRegister(false);
            }}
          ></i>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <h2
            className={` text-xl py-1 px-4 rounded  cursor-pointer ${
              isLogin ? "" : "bg-pink-500 font-medium text-white"
            }`}
            onClick={() => setIsLogin(false)}
          >
            LOGIN
          </h2>
          <h2
            className={`cursor-pointer ${
              isLogin
                ? " bg-pink-500 font-medium text-xl py-1 px-4 rounded text-white"
                : ""
            }`}
            onClick={() => setIsLogin(true)}
          >
            REGISTER
          </h2>
        </div>
        <div className="border border-gray-400 mt-2"></div>
        <Login isLogin={isLogin} setIsLogin={setIsLogin} />
        <span className={`${isLogin ? "block" : "hidden"}`}>
          <Register setIsLogin={setIsLogin} />
        </span>
      </div>
      <div
        className={`bg-gray-200 fixed inset-0 opacity-70 z-15 ${
          bgLoginRegister ? "block" : "hidden"
        }`}
        onClick={() => {
          setShowRegister(false);
          setBgLoginRegister(false);
        }}
      ></div>
    </div>
  );
}

export default BothForm;
