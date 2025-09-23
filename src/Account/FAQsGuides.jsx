import React from "react";
import { useControlData } from "../Context";

function FAQsGuides() {
  const {  showHidden } = useControlData();
  return (
    <div
      className={`md:w-[73%] md:ml-[27%] mt-4 min-h-[70vh] ${
        showHidden ? "hidden md:blcok" : "blcok"
      }`}
    >
      <h2 className="text-center text-xl font-medium">FAQs & Guides</h2>
    </div>
  );
}

export default FAQsGuides;
