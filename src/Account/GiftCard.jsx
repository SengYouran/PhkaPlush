import React, { useState } from "react";
import { useControlData } from "../Context";

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
        <h2 className="text-center">You have no old gift card yet</h2>
      </div>
    </div>
  );
}

export default GiftCard;
