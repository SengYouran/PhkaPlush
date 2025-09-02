import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Media_Large from "../Header/Media_Large";
import Mobile from "../Header/Mobile";
import BothForm from "../LoginRegisterPanel/BothForm";
import { useControlData } from "../Context";
import Search from "../Shop/Search";
function RootLayout() {
  const { showLogin, setShowLogin } = useControlData();

  return (
    <div className="font-popins">
      <Media_Large />
      <Mobile />
      <BothForm />

      {/* ✅ Login Overlay */}
      <div
        className={`bg-gray-200 fixed inset-0 z-[70] opacity-70 ${
          showLogin ? "block" : "hidden"
        }`}
        onClick={() => setShowLogin(false)}
      ></div>

      {/* ✅ Search */}
      <Search />

      {/* ✅ Main content */}
      <main className="pt-18 mx-4 md:mx-36 ">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
