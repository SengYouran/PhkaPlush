import React from "react";
import Logo from "../assets/logo/beauty body.png";
import { Link } from "react-router-dom";
import KHQR from "../assets/logo/KHQR_Logo.png";
import J_T from "../assets/logo/JT-Express-Logo.png";
import VTM from "../assets/logo/vireak-buntham.png";
import playStore from "../assets/logo/app_android.png";
import appStore from "../assets/logo/app_ios.png";

function Footer() {
  return (
    <React.Fragment>
      <div className="bg-gray-700 py-4 px-6 mt-4">
        <div className="flex flex-wrap justify-between items-center">
          <h2 className="text-2xl text-white">
            Have questions? Get in touch with Eleganza
          </h2>
          <Link className=" text-white text-sm border border-gray-400 py-2 px-4 rounded-4xl hover:bg-amber-50 hover:text-black">
            About Us
          </Link>
        </div>
        <div className="border border-gray-500 mt-12 mb-12"></div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          <div className="flex flex-col gap-4">
            <div className="">
              <img className="w-50 h-10" src={Logo} alt="Logo website" />
            </div>
            <div className="flex items-center gap-2">
              <span className="cursor-pointer transition-all duration-500 ease-in-out hover:scale-110">
                <img className="w-30 " src={appStore} alt="Logo App Store" />
              </span>
              <span className="cursor-pointer tansition-all duration-500 ease-in-out hover:scale-110">
                <img className="w-30 " src={playStore} alt="Logo Play Store" />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[17px] text-white ">RESOURCES</h2>
            <div className="border border-white w-15"></div>
            <p className="text-[13px] text-gray-100 cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-[13px] text-gray-100 cursor-pointer">
              Returns Policy
            </p>
            <Link to={"/"} className="text-[13px] text-gray-100 cursor-pointer">
              Home
            </Link>
            <p className="text-[13px] text-gray-100 cursor-pointer">
              Terms of Service
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[17px] text-white ">WE ACCEPT</h2>
            <div className="border border-white w-15"></div>
            <div className="flex flex-col gap-2">
              <img className="w-20" src={KHQR} alt="Logo KHQR" />
              <img className="w-20" src={J_T} alt="Logo J&T" />
              <img className="w-10" src={VTM} alt="Logo VTM" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[17px] text-white ">FOLLOW @pichpisey</h2>
            <div className="border border-white w-15"></div>
            <div className="flex items-center gap-4">
              <Link className="bg-blue-600 rounded-[50%] p-.5 shadow-blue-700 cursor-pointer">
                <i class="fa-brands fa-facebook text-3xl "></i>
              </Link>
              <Link className=" rounded-[50%]  shadow-blue-700 cursor-pointer">
                <i class="fa-brands fa-tiktok text-3xl "></i>
              </Link>
              <Link className="cursor-pointer">
                <i class="fa-brands fa-instagram text-3xl "></i>
              </Link>
              <Link className="bg-blue-400 rounded-[50%] p-.5 shadow-blue-700 cursor-pointer">
                <i class="fa-brands fa-telegram text-3xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center bg-white mb-8">
        Copyright© 2025, Pich Pisey Shop
      </h2>
    </React.Fragment>
  );
}

export default Footer;
