import Logo from "../assets/logo/beauty body.png";
function Mobile() {
  return (
    <header className="fixed w-screen flex justify-center item-center px-4 py-2 shadow shadow-gray-200 md:hidden">
      <span className=" text-2xl absolute top-1/2 -translate-y-1/2 left-4 text-pink-500 cursor-pointer"><i className="fa-solid fa-bars"></i></span>
      <span>
        <img src={Logo} alt="" className="h-10 cursor-pointer"/>
      </span>
    </header>
  );
}

export default Mobile;
