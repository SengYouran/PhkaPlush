import React, { useState } from "react";
import { useControlData } from "../Context";
import { voucher } from "../Data/Voucher";
function GiftCard() {
  const [showActive, setShowActive] = useState(false);
  const { showHidden } = useControlData();
  return (
    <div
      className={`md:w-[73%] md:ml-[27%] mt-4 min-h-[75vh] ${
        showHidden ? "hidden md:flex" : "flex"
      } flex-col gap-4`}
    >
      <h2 className={`text-center text-xl font-medium  `}>Gift Card</h2>
      <div className="flex justify-center items-center gap-4 ">
        <h2
          className={`cursor-pointer ${
            showActive ? "" : "font-bold border-b-2"
          }`}
          onClick={() => setShowActive(false)}
        >
          Active
        </h2>
        <h2
          className={`cursor-pointer ${
            showActive ? "font-bold border-b-2" : ""
          }`}
          onClick={() => setShowActive(true)}
        >
          Inactive
        </h2>
      </div>
      <div className={`${showActive ? "hidden" : "flex flex-col"}`}>
        <h2 className="text-center">You have no gift card yet</h2>
      </div>
      <div className={`${showActive ? "flex flex-col" : "hidden"}`}>
        {voucher.length < 0 ? (
          <h2 className="text-center">You have no old gift card yet</h2>
        ) : (
          <div className="relative overflow-hidden p-4">
            {voucher.map((render) => (
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <h2 className="text-[16px]">{render?.voucher_name}</h2>
                    <p className="text-[16px]">Valid from:</p>
                    <p className="text-[15px]">{render?.valid}</p>
                    <h2 className="text-[15px]">{render?.discount}</h2>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-medium">{render?.num_dis}</p>
                    <h2 className="text-[17px]">Claim code</h2>
                    <p className="text-[16px]">{render?.num_code}</p>
                    <h2 className="text-xl font-bold text-yellow-400">Expired</h2>
                  </div>
                </div>
                <div className="border border-gray-50"></div>
              </div>
            ))}
           <div className="absolute inset-0 bg-gray-50 opacity-30 pointer-events-none"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GiftCard;
