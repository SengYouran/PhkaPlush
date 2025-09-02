import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo/beauty body.png";
import { useEffect, useState } from "react";
import { useControlData } from "../Context";
import cart_bag from "../assets/logo/shopping bag.png";
const navLinks = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Shop", path: "/shop" },
  { id: 3, label: "New Arrival", path: "/new_arrival" },
  { id: 4, label: "On Sale", path: "/on_sale" },
  { id: 5, label: "Context Us", path: "/context_us" },
];

function Media_Large() {
  const {
    setShowLogin,
    currentAccount,
    setShowRegister,
    setBgLoginRegister,
    setSearch,
  } = useControlData();
  const [navActive, setNavActive] = useState(0);
  const [storeBags, setStoreBage] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const locationPath = navLinks.find(({ path }) => {
      if (path === "/") {
        return location.pathname === "/";
      }
      return location.pathname.startsWith(path);
    });
    if (locationPath) {
      setNavActive(locationPath.id);
    }
  }, [location.pathname, navLinks]);
  return (
    <header className=" hidden md:flex fixed w-screen justify-between items-center z-70 px-8 py-2 bg-white shadow shadow-gray-200">
      <div className=" cursor-pointer">
        <img src={Logo} alt="Logo Website" className=" h-6" />
      </div>
      <ul className="flex justify-center items-center gap-6 font-semibold text-black">
        {navLinks.map(({ id, label, path }) => {
          return (
            <li
              className={`text-sm px-1 py-1 transition-all duration-200  ${
                navActive === id
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : ""
              }`}
              key={id}
              onClick={() => setNavActive(id)}
            >
              <Link className="text-[15px]" to={path}>{label}</Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-2 ">
        {currentAccount.length != 0 ? (
          <div className="flex items-center gap-4 py-2">
            <span
              className="text-2xl cursor-pointer"
              onClick={() => setSearch(true)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <div className="h-6 border-l border-black"></div>
            <span className="w-[25px] cursor-pointer relative">
              <img src={cart_bag} alt="StoreBags" />
              <p className="absolute top-[65%] left-1/2 transform -translate-1/2 font-medium text-xl text-pink-500">{storeBags}</p>
            </span>
            <div className="h-6 border-l border-black"></div>
            <span className="text-2xl cursor-pointer">
              <i className="fa-solid fa-face-smile text-pink-500"></i>
            </span>
          </div>
        ) : (
          <ul className=" flex items-center gap-4">
            <li
              className="font-medium"
              onClick={() => {
                setShowLogin(true);
                setShowRegister(true);
                setBgLoginRegister(true);
              }}
            >
              <Link>Sign in</Link>
            </li>
            <li
              onClick={() => {
                setShowLogin(true);
                setShowRegister(true);
                setBgLoginRegister(true);
              }}
              className="bg-pink-400 py-2 px-4 rounded-xl text-white font-medium hover:bg-pink-500"
            >
              <Link>Register</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Media_Large;
