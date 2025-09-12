import React, { useRef, useState } from "react";

const number = [1, 2, 3, 4, 5];

export default function PointSelector() {
  const scrollRef = useRef(null);
  const [selected, setSelected] = useState(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -60, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 60, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Close button */}
      <div className="absolute top-6 right-4 w-8 h-8 cursor-pointer transform -translate-y-1/2 group">
        <div className="absolute top-1/2 w-full h-[2px] bg-black origin-center transition-all duration-200 ease-in-out transform rotate-45 group-hover:rotate-0"></div>
        <div className="absolute top-1/2 w-full h-[2px] bg-black origin-center transition-all duration-200 ease-in-out transform -rotate-45 group-hover:rotate-0"></div>
      </div>

      {/* Header */}
      <h2 className="mt-8 text-center">Point Redemption</h2>
      <div className="flex flex-col justify-center items-center gap-1 mt-8">
        <h2 className="text-2xl font-bold text-pink-600">
          5 points ≈ US $0.75
        </h2>
        <p className="text-[16px]">
          AVAILABLE POINTS / EXCHANGE FOR CASH VOUCHER
        </p>
      </div>

      {/* Scrollable Box */}
      <div className="relative bg-amber-100 mt-30 px-4">


        {/* Scrollable Items */}
        <div
          ref={scrollRef}
          className="flex justify-center items-center gap-6 h-12 px-10 overflow-x-auto max-w-full"
        >
          {number.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`relative w-1 h-8 cursor-pointer z-20 ${
                selected === index ? "bg-pink-600" : "bg-gray-500"
              }`}
            >
              {selected === index && (
                <div
                  className=" w-[3.89px] h-[4rem] absolute -top-15 left-1/2 right-1 -translate-x-1/2 border border-pink-600 bg-pink-600"
                >
                  <h2 className="w-[7rem] py-2 text-center bg-pink-600 absolute -top-2 left-1/2 -translate-x-1/2 text-xs text-white">
                    {item} point = ${`${(item * 0.15).toFixed(2)}`}
                  </h2>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
