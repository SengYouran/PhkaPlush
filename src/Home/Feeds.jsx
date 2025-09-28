import React from "react";
import { data_feeds } from "../Data/Feed";
import useInViewAnimation from "../Custom_hook/useInViewAnimation";
function Feeds() {
  const productRefs = useInViewAnimation("active", 100); // 100ms delay per product
  return (
    <div className="bg-gray-200 rounded mt-4 py-2 px-4 overflow-hidden">
      <h2 className="text-4xl font-rowdies text-center">Feeds</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4">
        {data_feeds.map((render, index) => (
          <span
            key={index}
            className="fade-left w-full"
            ref={(el) => (productRefs.current[index] = el)}
          >
            <img
              className="w-full h-[16rem] 2xl:h-[18rem] rounded-xl "
              src={render}
              loading="lazy"
              alt="Model Feeds"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Feeds;
