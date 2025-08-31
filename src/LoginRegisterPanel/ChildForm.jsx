import React from "react";
import { Link } from "react-router-dom";
import { useControlData } from "../Context";
function ChildForm() {
  const { setShowLogin } = useControlData();
  return (
    <form className="mt-6 mx-8 flex flex-col gap-4 mb-6">
      <div className="flex justify-center items-center">
        <i
          className="fa-solid fa-xmark text-xl absolute left-8 hover:bg-gray-100 rounded-[50%] py-1 px-2 cursor-pointer"
          onClick={() => setShowLogin(false)}
        ></i>
        <h2 className="text-xl">Me</h2>
      </div>
      <div>
        <h2 className="text-sm">Join Now!</h2>
        <h2 className="text-sm">Unlock Your Favorites Skin Care With Us!</h2>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button className="w-1/2 py-1 text-xl font-medium border-1 text-center rounded cursor-pointer">
          Login
        </button>
        <button className="w-1/2 py-[5px] text-xl font-medium bg-pink-500 text-white text-center cursor-pointer rounded hover:bg-pink-600">
          Register
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-xl font-bold">Order History</h2>
        <div className="flex justify-between item-center cursor-pointer">
          <p className="text-sm ">My order</p>
          <i className="fa-solid fa-greater-than text-xs mt-2"></i>
        </div>
        <div className=" w-full h-px bg-gray-300"></div>
      </div>
      <div className=" mt-4">
        <h2 className="text-xl font-bold">Shop Preference</h2>
        <div className="flex flex-col gap-2 mt-2">
          <span className="flex flex-col gap-2">
            <Link className="text-sm">Home</Link>
            <div className=" w-full h-px bg-gray-300"></div>
          </span>
          <span className="flex flex-col gap-2">
            <Link className="text-sm">Shop</Link>
            <div className=" w-full h-px bg-gray-300"></div>
          </span>
          <span className="flex flex-col gap-2">
            <Link className="text-sm">New Arrival</Link>
            <div className=" w-full h-px bg-gray-300"></div>
          </span>
          <span className="flex flex-col gap-2">
            <Link className="text-sm">On Sale</Link>
            <div className=" w-full h-px bg-gray-300"></div>
          </span>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Support</h2>
        <div className=" flex flex-col gap-2 mt-2">
          <span className="flex justify-between items-center">
            <p className="text-sm ">Privacy Policy</p>
            <i className="fa-solid fa-greater-than text-xs mt-2"></i>
          </span>
          <div className=" w-full h-px bg-gray-300"></div>
        </div>
        <div className=" flex flex-col gap-2 mt-2">
          <span className="flex justify-between items-center">
            <p className="text-sm ">About Us</p>
            <i className="fa-solid fa-greater-than text-xs mt-2"></i>
          </span>
          <div className=" w-full h-px bg-gray-300"></div>
        </div>
        <div className=" flex flex-col gap-2 mt-2">
          <span className="flex justify-between items-center">
            <p className="text-sm ">FAQs & guides</p>
            <i className="fa-solid fa-greater-than text-xs mt-2"></i>
          </span>
          <div className=" w-full h-px bg-gray-300"></div>
        </div>
      </div>
    </form>
  );
}

export default ChildForm;
