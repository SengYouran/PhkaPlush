import React, { useState } from "react";
import PointSelector from "./PointSelector";

function Gift_Point() {
  const [bgvocher, setBgVochor] = useState(false);
  const [showCoin, setShowCoin] = useState(false);
  let number = [1, 2, 3, 4, 5];
  return (
    <section>
      <div>
        <h2 className="text-xl font-medium">Redeem Code</h2>
        <p className="text-right text-[13px]">
          Checkout my
          <span
            className="text-red-600 cursor-pointer font-medium"
            onClick={() => setBgVochor(true)}
          >
            {" "}
            gift card
          </span>
        </p>
        <form className="flex justify-center items-center gap-2 w-full mt-4">
          <input
            className="border text-sm border-black outline-0 w-[80%] h-[2.5rem] pl-2"
            type="text"
            name="gift"
            id="gift"
            placeholder="Claim code"
          />
          <h2 className="border border-black w-[20%] h-[2.5rem] flex justify-center items-center cursor-pointer">
            Apply
          </h2>
        </form>
      </div>
      <div
        className={`fixed bg-gray-100 w-full md:w-[35rem] h-full top-0 right-0 px-4 transition-all duration-500 ease-in-out ${
          bgvocher
            ? "transform translate-x-0 z-80 opacity-100"
            : "translate-x-50 -z-80 opacity-0"
        }`}
      >
        <div className=" mt-8 flex justify-center items-center ">
          <i
            className="fa-solid fa-less-than absolute left-4 text-sm cursor-pointer"
            onClick={() => setBgVochor(false)}
          ></i>
          <h2 className="text-sm">Select a voucher</h2>
        </div>
        <div className="border w-full border-gray-200 opacity-70 mt-8"></div>
        <h2 className="text-center text-[15px] mt-12">
          You have no gift card yet.
        </h2>
      </div>
      <div
        className={`bg-gray-50 fixed inset-0 transition-all duration-500 ease-in-out ${
          bgvocher ? "opacity-50 z-75" : "opacity-0 -z-75"
        }`}
        onClick={() => setBgVochor(false)}
      ></div>
      <div className="mt-6 relative">
        <div className="mt-4 flex items-center gap-4">
          <h2 className="text-xl font-medium">Point redemption</h2>
          <i className="fa-solid fa-question text-sm bg-black text-white py-1 px-1 rounded-[40%]"></i>
        </div>
        <div
          className="flex items-center gap-2 bg-white px-4 py-2 mt-2 rounded cursor-pointer"
          onMouseEnter={() => setShowCoin(true)}
          onMouseLeave={() => setShowCoin(false)}
        >
          <i className="fa-solid fa-coins text-blue-900"></i>
          <div>
            <h2 className="text-blue-900 font-bold text-[15px]">Use points</h2>
            <p className="text-gray-500 text-sm">0 points ≈ US $0.00</p>
          </div>
        </div>
        <div
          className={`bg-pink-200 absolute w-full py-2 left-1/2 -translate-1/2 transition-all duration-500 ease-in-out
         ${showCoin ? "top-5 opacity-100 z-80" : "-z-80 opacity-0 top-10"}`}
        >
          <h2 className="text-center text-gray-500 font-bold">
            1 point ≈ $0.15
          </h2>
        </div>
      </div>
      <div className="bg-white w-1/2 h-[95%] my-2 fixed left-1/2 top-1/2 -translate-1/2 z-80 hidden">
        <PointSelector />
      </div>
    </section>
  );
}

export default Gift_Point;
