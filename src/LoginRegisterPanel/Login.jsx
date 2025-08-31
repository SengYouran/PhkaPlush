import React, { useState } from "react";
import facebook from "../assets/logo/facebook logo.svg";
import google from "../assets/logo/google logo.png";
import { useControlData } from "../Context";
import { useNavigate } from "react-router-dom";
function Login({ isLogin, setIsLogin }) {
  const { userAccount, setCurrentAccount, setShowLogin } = useControlData();
  const [telephoneLogin, setTelephoneLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const navigator = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    const checkLogin = userAccount?.find(
      (check) =>
        check.telephone === telephoneLogin && check.password === passwordLogin
    );
    if (checkLogin) {
      setCurrentAccount(checkLogin);
      setShowLogin(false);
      navigator("/");
    } else {
      setIsLogin(true);
    }
  }
  return (
    <form
      className={`flex-col gap-3 ${isLogin ? "hidden" : "flex"}`}
      onSubmit={handleLogin}
    >
      <div className="flex flex-col gap-1 mt-4">
        <h2 className="text-[15px] font-medium">Telephone*</h2>
        <input
          type="tel"
          inputMode="numeric"
          name="telRegister"
          id="telLogin"
          className="w-full h-[35px] border border-pink-500 pl-2 outline-0 rounded"
          placeholder="Enter Telephone"
          value={telephoneLogin}
          onChange={(e) => setTelephoneLogin(e.target.value)}
        />
      </div>
      <div>
        <h2 className="text-[15px] font-medium">Password*</h2>
        <span className=" relative">
          <input
            // type={`${showPassd1 ? "text" : "password"}`}
            type="password"
            className="border border-pink-500 w-full h-[35px] pl-2 bg-white outline-0 rounded"
            name="passwordRegister"
            id="passdLogin"
            placeholder="Password"
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
          <i
            className={` fa-solid fa-eye-slash absolute top-[20%] right-4 text-gray-400 cursor-pointer`}
            //onClick={() => setShowPassd1(true)}
          ></i>
          <i
            className={`fa-solid fa-eye absolute top-[20%] right-4 text-gray-400 cursor-pointer hidden`}
            // onClick={() => setShowPassd1(false)}
          ></i>
        </span>
      </div>
      <button
        className=" w-full h-[35px] bg-pink-500 text-white hover:bg-pink-600 cursor-pointer rounded mt-2"
        type="submit"
      >
        LOGIN
      </button>
      <h2 className="text-center text-sm font-medium">Forget Your Password?</h2>
      <div className="flex justify-center items-center gap-2">
        <div className="border border-gray-300 w-full"></div>
        <h2 className="text-sm">OR</h2>
        <div className="border border-gray-300 w-full"></div>
      </div>
      <div className="border w-full h-[35px] flex justify-center items-center relative rounded cursor-pointer">
        <img
          src={facebook}
          alt="Facebook logo"
          className="w-[20px] absolute left-4 top-1/2 transform -translate-1/2"
        />
        <h2 className="">Continue With Facebook</h2>
      </div>
      <div className="border w-full h-[35px] flex justify-center items-center relative rounded cursor-pointer mt-2">
        <img
          src={google}
          alt="Google logo"
          className="w-[20px] absolute left-4 top-1/2 transform -translate-1/2"
        />
        <h2 className="">Continue With Google</h2>
      </div>
      <h2
        className="text-center text-sm font-medium cursor-pointer"
        onClick={() => {
          setIsLogin(true);
        }}
      >
        New to Mini Mart? Register
      </h2>
    </form>
  );
}

export default Login;
