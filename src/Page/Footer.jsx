import React from "react";
import Logo from "../assets/logo/beauty body.png";
import { Link, useNavigate } from "react-router-dom";
import KHQR from "../assets/logo/KHQR_Logo.png";
import J_T from "../assets/logo/JT-Express-Logo.png";
import VTM from "../assets/logo/vireak-buntham.png";
import playStore from "../assets/logo/app_android.png";
import appStore from "../assets/logo/app_ios.png";
import { useControlData } from "../Context";

function Footer() {
  const { setPolicy, setNavActive, setFaqGuides, handleLogout } =
    useControlData();
  const navigator = useNavigate();
  return (
    <React.Fragment>
      <div className="bg-gray-700 py-4 px-6 mt-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h2 className="text-2xl text-white">
            Have questions? Get in touch with Eleganza
          </h2>
          <buttom
            onClick={() => {
              handleLogout();
              navigator("/");
            }}
            className=" text-white text-sm border border-gray-400 py-2 px-4 rounded-4xl hover:bg-amber-50 hover:text-black"
          >
            Logout
          </buttom>
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
            <p
              className="text-[13px] text-gray-100 cursor-pointer"
              onClick={() => setPolicy(true)}
            >
              Privacy Policy
            </p>
            <Link
              to={"/account/faqguides"}
              className="text-[13px] text-gray-100 cursor-pointer"
              onClick={() => {
                setFaqGuides(true);
                setNavActive(null);
              }}
            >
              FAQs & Guides
            </Link>
            <Link to={"/"} className="text-[13px] text-gray-100 cursor-pointer">
              Home
            </Link>
            <Link
              to={"/about-us"}
              className="text-[13px] text-gray-100 cursor-pointer"
              onClick={() => setNavActive(null)}
            >
              About Us
            </Link>
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
              <a
                href="https://web.facebook.com/phka.official/?_rdc=1&_rdr#"
                className="bg-blue-600 rounded-[50%] p-.5 shadow-blue-700 cursor-pointer"
              >
                <i className="fa-brands fa-facebook text-3xl "></i>
              </a>
              <a
                href="https://www.tiktok.com/@phka.official"
                className=" rounded-[50%]  shadow-blue-700 cursor-pointer"
              >
                <i className="fa-brands fa-tiktok text-3xl "></i>
              </a>
              <a
                href="https://www.instagram.com/phka.official/"
                className="cursor-pointer"
              >
                <i className="fa-brands fa-instagram text-[#E1306C] text-3xl"></i>
              </a>
              <a
                href="https://t.me/phkaofficial"
                className="bg-blue-400 rounded-[50%] p-.5 shadow-blue-700 cursor-pointer"
              >
                <i className="fa-brands fa-telegram text-3xl"></i>
              </a>
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
