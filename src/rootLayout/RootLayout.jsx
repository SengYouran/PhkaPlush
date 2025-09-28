import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Media_Large from "../Header/Media_Large";
import Mobile from "../Header/Mobile";
import BothForm from "../LoginRegisterPanel/BothForm";
import { useControlData } from "../Context";
import Search from "../Shop/Search";
import Scroll from "../Scroll";
import Footer from "../Page/Footer";
import Cart from "../Shop/Cart";
import PrivacyPolicy from "../AboutCompany/PrivacyPolicy";
function RootLayout() {
  const { showLogin, setShowLogin, bgCart, setBgCart, setShowCart } =
    useControlData();

  return (
    <div className="font-popins min-h-screen flex flex-col">
      <Scroll />
      <Media_Large />
      <Mobile />
      <BothForm />
      <div
        className={`bg-black fixed inset-0  ${
          bgCart ? "z-70 opacity-10" : "-z-10 opacity-0"
        }`}
        onClick={() => {
          setBgCart(false);
          setShowCart(false);
        }}
      ></div>
      <Cart />
      {/* ✅ Login Overlay */}
      <div
        className={`bg-gray-200 fixed inset-0 z-60 opacity-70 ${
          showLogin ? "block" : "hidden"
        }`}
        onClick={() => setShowLogin(false)}
      ></div>

      {/* ✅ Search */}
      <Search />
      <PrivacyPolicy />
      {/* ✅ Main content */}
      <main className="pt-18 mx-4 xl:mx-32 ">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
