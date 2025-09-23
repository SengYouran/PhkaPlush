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
function Mobile() {
  const {
    setShowLogin,
    currentAccount,
    setShowRegister,
    setBgLoginRegister,
    setSearch,
    setShowCart,
    setBgCart,
    userAccount,
  } = useControlData();
  const [navActive, setNavActive] = useState(0);
  const [showNavLink, setShowNavLink] = useState(false);
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
  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const selectCounter = userIndex?.storeBags || [];
    let totalCounter = 0;
    selectCounter.forEach((add) => {
      return (totalCounter += add?.counter);
    });
    setStoreBage(totalCounter);
  }, [userAccount]);
  return (
    <>
      <header
        className={`fixed z-60 w-screen flex  item-center ${
          currentAccount.length != 0 ? "justify-between" : "justify-center"
        } px-4 py-3 shadow bg-white shadow-gray-200 md:hidden`}
      >
        <span
          className={`text-xl text-pink-500 cursor-pointer ${
            currentAccount.length != 0 ? "" : "absolute left-2"
          }`}
          onClick={() => setShowNavLink(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </span>
        <Link to={"/"}>
          <img src={Logo} alt="Logo website" className="h-6 cursor-pointer" />
        </Link>
        {currentAccount.length != 0 ? (
          <div className="flex items-center gap-3">
            <span
              className="text-xl cursor-pointer"
              onClick={() => setSearch(true)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <div className="h-6 border-l border-black"></div>
            <Link to={"/wishlist"} className="cursor-pointer">
              <i className="fa-regular fa-heart text-black text-xl"></i>
            </Link>
            <div className="h-6 border-l border-black"></div>
            <span
              className="w-[20px] cursor-pointer relative"
              onClick={() => {
                setShowCart(true);
                setBgCart(true);
              }}
            >
              <img src={cart_bag} alt="StoreBag" />
              <p className="absolute top-[60%] left-1/2 transform -translate-1/2 font-bold text-[15px] text-pink-500">
                {storeBags}
              </p>
            </span>
            <div className="h-6 border-l border-black"></div>
            <span className="text-xl cursor-pointer">
              <i className="fa-solid fa-face-smile text-pink-500"></i>
            </span>
          </div>
        ) : null}
      </header>
      <div
        className={`fixed inset-0 bg-gray-100  ${
          showNavLink ? "block opacity-80" : "hidden"
        }`}
        onClick={() => setShowNavLink(false)}
      ></div>
      <nav
        className={`fixed top-0 left-0 bg-white w-[0] h-[100vh] transition-all duration-400 ease-in-out -z-10 transform -translate-x-8 opacity-0 ${
          showNavLink
            ? " z-60 opacity-90 transform translate-x-0 w-[20rem]"
            : ""
        }`}
      >
        <div
          className="absolute top-8 right-8 w-8 h-8 cursor-pointer transform -translate-y-1/2 group"
          onClick={() => setShowNavLink(false)}
        >
          <div className="absolute top-1/2 w-full h-[2px] bg-pink-500 origin-center transition-all duration-200 ease-in-out transform rotate-45 group-hover:rotate-0"></div>
          <div className="absolute top-1/2 w-full h-[2px] bg-pink-500 origin-center transition-all duration-200 ease-in-out transform -rotate-45 group-hover:rotate-0"></div>
        </div>

        <ul className={`flex flex-col gap-4 mt-12 ml-8`}>
          {navLinks.map((render) => {
            return (
              <li
                className={`${
                  navActive === render.id
                    ? "text-pink-500 border-b-3 w-full border-pink-500 font-bold"
                    : ""
                } hover:text-pink-500 hover:font-bold`}
                key={render.id}
                onClick={() => {
                  setNavActive(render.id);
                  setShowNavLink(false);
                }}
              >
                <Link to={render.path} className="text-2xl">
                  {render.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {currentAccount.length != 0 ? (
          <div className="absolute left-[40%] bottom-16 flex items-center gap-2 cursor-pointer group">
            <i class="fa-solid fa-right-from-bracket"></i>
            <h2 className="bg-pink-500 py-1 px-4 text-white rounded group-hover:bg-pink-600">
              Logout
            </h2>
          </div>
        ) : (
          <div className=" absolute left-8 bottom-16 flex gap-4">
            <button
              className="font-medium border hover:bg-gray-100 py-2 px-4 rounded-xl cursor-pointer"
              onClick={() => {
                setShowLogin(true);
                setShowRegister(true);
                setBgLoginRegister(true);
              }}
            >
              Login
            </button>
            <button
              className="font-medium text-white bg-pink-500 py-2 px-4 rounded-xl hover:bg-pink-600 cursor-pointer"
              onClick={() => {
                setShowLogin(true);
                setShowRegister(true);
                setBgLoginRegister(true);
              }}
            >
              Register
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Mobile;
