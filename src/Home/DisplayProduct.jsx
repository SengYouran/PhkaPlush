import React, { useEffect, useState } from "react";
import { dataItems } from "../Data/showProduct"; // default export
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
        return "z-30 opacity-100 md:scale-80 md:translate-x-25 xl:scale-90 2xl:scale-200 xl:translate-x-15 cursor-pointer";
      case 1:
        return "z-20 opacity-60 md:scale-55 md:translate-x-75 xl:translate-x-70 scale-60 2xl:scale-150 2xl:translate-x-150 translate-x-72 blur-[4px]";
      case 2:
        return "z-10 opacity-30 scale-40 translate-x-104 blur-[6px] 2xl:scale-100 2xl:translate-x-240";
      default:
        0;
        return "opacity-0 translate-y-[500px] scale-60";
    }
  };

  return (
    <div
      className="w-full h-[50%] xl:h-[70%] p-4 bg-white mt-8 text-black flex justify-center items-center 
    relative overflow-hidden "
    >
      {/* Text Section */}
      <div className=" hidden md:flex flex-col absolute left-10 top-1/2 -translate-y-1/2 w-76 2xl:w-120 ">
        <h2
          className={`text-4xl 2xl:text-6xl font-rowdies ${
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
          className={`mt-4 text-white text-xl text-center font-medium  ${dataItems[index]?.bgColor} cursor-pointer py-1 px-4 rounded`}
        >
          Order now
        </Link>
      </div>
      <div className="flex items-center gap-8 md:hidden absolute top-0 ">
        <span className="mt-2">
          {" "}
          <h2
            className={`text-xl font-rowdies ${
              dataItems[index]?.colorText
            } font-bold mb-2 transition-opacity duration-1000 ${
              showText ? "opacity-100" : "opacity-0"
            }`}
          >
            {dataItems[index].name}
          </h2>
        </span>
        <span>
          <Link
            to={`/shop/${dataItems[index]?.id}`}
            className={`text-white text-sm text-center font-medium  ${dataItems[index]?.bgColor} cursor-pointer py-1 px-4 rounded`}
          >
            Order now
          </Link>
        </span>
      </div>
      {/* Image Layering Section */}
      <div className="relative flex justify-center items-center mt-4 ">
        {dataItems.map((item, i) => (
          <Link
            key={i}
            className={`absolute w-[300px] h-[250px] transition-all duration-1000 ease-in-out transform ${getPositionClass(
              i
            )} flex justify-center items-center`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full rounded-lg shadow-2xl "
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DisplayProduct;
