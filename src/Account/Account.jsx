import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import ControllAccount from "./ControllAccount";
import Footer from "../Page/Footer";
import { useControlData } from "../Context";
function Account() {
  const { showHidden, setShowHidden, setDetail } = useControlData();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowHidden(false);
      }
    };

    // Run once when component mounts
    handleResize();

    // Optionally: if you want to respond to screen resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, [setShowHidden]);
  return (
    <div className="mt-4 bg-white px-2 py-1">
      <span
        className={`flex md:hidden items-center gap-2 border px-2 py-1 w-25 rounded-2xl cursor-pointer ml-2 mt-2 ${
          showHidden ? "hidden" : "flex"
        }`}
        onClick={() => {
          setShowHidden(true);
          setDetail(false);
        }}
      >
        <i className="fa-solid fa-reply"></i>
        <h2>Back !</h2>
      </span>
      <ControllAccount />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Account;
