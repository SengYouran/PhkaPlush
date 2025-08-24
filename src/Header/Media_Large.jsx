import { Link } from "react-router-dom";
import Logo from "../assets/logo/beauty body.png";
import { useState } from "react";
const navLinks = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "New Arrival", path: "/new_arrival" },
  { label: "On Sale", path: "/on_sale" },
  { label: "Context Us", path: "/context_us" },
];

function Media_Large() {
  const [navActive, setNavActive] = useState(0);
  return (
    <header className=" hidden md:flex fixed w-screen justify-between items-center px-4 py-2 bg-white shadow shadow-gray-200">
      <div className=" cursor-pointer">
        <img src={Logo} alt="Logo Website" className=" h-6" />
      </div>
      <ul className="flex justify-center items-center gap-6 font-semibold text-black">
        {navLinks.map((item, index) => {
          return (
            <li
              className={`text-sm px-1 py-1 transition-all duration-200  ${
                navActive === index
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : ""
              }`}
              key={index}
              onClick={() => setNavActive(index)}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          );
        })}
      </ul>

      <ul className=" flex items-center gap-4">
        <li className="font-medium">
          <Link>Sign in</Link>
        </li>
        <li className="bg-pink-400 py-2 px-4 rounded-xl text-white font-medium hover:bg-pink-500">
          <Link>Register</Link>
        </li>
      </ul>
    </header>
  );
}

export default Media_Large;
