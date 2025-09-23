import React from "react";
import { useControlData } from "../Context";

function CheckBag({ products, bgCheckBag, setBgCheckBag }) {
  const { setShowCart } = useControlData();
  return (
    <>
      <div
        className={` bg-white fixed bottom-0 left-0 w-screen transition-all duration-500 ease-in-out  flex justify-center items-center gap-4 ${
          bgCheckBag ? "z-75 opacity-100 h-[20rem]" : "opacity-0 -z-50 h-10"
        }`}
      >
        <div className=" shadow shadow-pink-200 rounded-xl">
          <img src={products?.product} alt="Product Picture" className="w-30" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold">Exited Add To Bag</h2>
          <p className="">Price: {products?.product_price}</p>
          <button
            className="bg-pink-500 text-sm font-bold py-1.5 px-4 text-white rounded hover:bg-pink-600 cursor-pointer"
            onClick={() => {
              setBgCheckBag(false);
              setShowCart(true);
            }}
          >
            Check a Bags
          </button>
        </div>
      </div>
    </>
  );
}

export default CheckBag;
