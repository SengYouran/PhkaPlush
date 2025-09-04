import React, { useEffect, useState } from "react";
import dataItems from "../Data/showProduct"; // default export
import { Link } from "react-router-dom";

function DisplayProduct() {
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % dataItems.length);
        setShowText(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // position class based on relative index
  const getPositionClass = (i) => {
    const relative = (i - index + dataItems.length) % dataItems.length;
    switch (relative) {
      case 0:
        return "z-30 opacity-100 scale-90 xl:translate-x-15 cursor-pointer";
      case 1:
        return "z-20 opacity-60 scale-60 translate-x-72 blur-[4px]";
      case 2:
        return "z-10 opacity-30 scale-40 translate-x-108 blur-[6px]";
      default:
        0;
        return "opacity-0 translate-y-[500px] scale-60";
    }
  };

  return (
    <div
      className="w-full h-[50%] md:h-[70%] bg-gray-100 mt-8 text-black flex justify-center items-center 
    relative overflow-hidden 2xl:hidden"
    >
      {/* Text Section */}
      <div className=" hidden xl:flex flex-col absolute left-10 top-1/2 -translate-y-1/2 w-76">
        <h2
          className={`text-4xl font-rowdies ${
            dataItems[index]?.colorText
          } font-bold mb-2 transition-opacity duration-1000 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          {dataItems[index].name}
        </h2>
        <p
          className={`text-sm text-gray-700 transition-opacity duration-500 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          {dataItems[index].description}
        </p>
        <Link
          to={`/shop/${dataItems[index]?.id}`}
          className="mt-4 text-white text-xl text-center font-medium  bg-pink-500 cursor-pointer py-1 px-4 rounded hover:bg-pink-600"
        >
          Order now
        </Link>
      </div>
      <div className="block xl:hidden absolute top-0 ">
        <h2
          className={`text-4xl font-rowdies ${
            dataItems[index]?.colorText
          } font-bold mb-2 transition-opacity duration-1000 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          {dataItems[index].name}
        </h2>
      </div>
      {/* Image Layering Section */}
      <div className="relative flex justify-center items-center mt-4 ">
        {dataItems.map((item, i) => (
          <div
            key={i}
            className={`absolute w-[300px] h-[250px] transition-all duration-1000 ease-in-out transform ${getPositionClass(
              i
            )} flex justify-center items-center `}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full  rounded-lg shadow-lg "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayProduct;
