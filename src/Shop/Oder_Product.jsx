import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { data_product } from "../Data/ProductInfomation";
import cart_white from "../assets/logo/cart-white.png";

function Order_Product() {
  const { id } = useParams();
  const [products, setProduct] = useState([]);
  const [bg_smallImg, setBg_SmallImg] = useState(0);
  const [KHR, setKHR] = useState(null);
  const scrollRef = useRef(null);

  const images = [
    products?.relate1,
    products?.relate2,
    products?.relate3,
    products?.relate4,
  ];

  useEffect(() => {
    const filterProduct = data_product.find((check) => check.id == id);
    const filterPrice = filterProduct?.product_price;
    const formatString = parseFloat(filterPrice.replace("$", ""));
    const khmerMoneyRaw = Math.round(formatString * 4000);
    const khmerMoneyFormatted =
      new Intl.NumberFormat("km-KH").format(khmerMoneyRaw) + " ៛";
    setProduct(filterProduct);
    setKHR(khmerMoneyFormatted);
  }, [id, data_product]);

  // 🟦 Function to scroll to specific image
  const scrollToImage = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.offsetWidth * index;
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
    setBg_SmallImg(index);
  };

  // 🟦 Handle next and previous
  const handleNext = () => {
    if (bg_smallImg < images.length - 1) {
      scrollToImage(bg_smallImg + 1);
    }
  };

  const handlePrev = () => {
    if (bg_smallImg > 0) {
      scrollToImage(bg_smallImg - 1);
    }
  };

  return (
    <div className="bg-white p-2 rounded-2xl flex flex-wrap md:flex-nowrap justify-center gap-6 mt-4">
      <div className="flex flex-col w-full h-[50vh] md:h-full md:w-1/2 bg-gray-50 p-2 rounded-xl relative">
        {/* Prev Button */}
        <span
          className={`absolute left-2 top-[35%] bg-pink-200 py-1 px-2 rounded-full cursor-pointer z-10
    ${
      bg_smallImg === 0 ? "pointer-events-none opacity-50" : "hover:bg-pink-300"
    }`}
          onClick={handlePrev}
        >
          <i className="fa-solid fa-less-than"></i>
        </span>

        {/* Scrollable Image Container */}
        <div
          className="overflow-x-hidden flex w-full h-[70vh] scroll-smooth"
          ref={scrollRef}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-none w-full h-full transition-all duration-300"
            >
              <img
                className="w-full h-full "
                src={img}
                alt={`relate${i + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <span
          className={`absolute right-2 top-[35%] bg-pink-200 py-1 px-2 rounded-full cursor-pointer z-10
    ${
      bg_smallImg === images.length - 1
        ? "pointer-events-none opacity-50"
        : "hover:bg-pink-300"
    }`}
          onClick={handleNext}
        >
          <i className="fa-solid fa-greater-than"></i>
        </span>

        {/* Small Images */}
        <div className="flex items-center gap-2 mt-2">
          {images.map((img, i) => (
            <span
              key={i}
              className={`cursor-pointer w-full max-w-[10rem] transition duration-300  relative`}
              onClick={() => scrollToImage(i)}
            >
              <img
                className="w-full h-[9rem] rounded-xl"
                src={img}
                alt={`thumb${i + 1}`}
              />
              <div
                className={` ${
                  bg_smallImg === i
                    ? ""
                    : "bg-black absolute inset-0 opacity-50 rounded-xl"
                }`}
              ></div>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <span className="text-2xl font-rowdies">
          <h2 className={`${products?.colorText}`}>
            {products?.product_name} Blush
          </h2>
        </span>
        <span>
          <p>{products?.detail1}</p>
        </span>
        <span className="text-sm space-y-1">
          {products?.detail2?.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </span>
        <span>
          <h2>USD: <span className="text-pink-500">{products?.product_price}</span></h2>
        </span>
        <span>
          <h2>KHR: <span className="text-pink-500">{KHR}</span></h2>
        </span>
        <span className="flex items-center gap-4">
          <i className={`fa-solid fa-minus cursor-pointer`}></i>
          <p className="border text-center py-1 w-[4rem] rounded-2xl">0</p>
          <i className="fa-solid fa-plus cursor-pointer"></i>
        </span>
        <span className="w-[10rem] bg-pink-400 hover:bg-pink-500 cursor-pointer py-1 px-2 rounded flex justify-center items-center gap-1.5">
          <img className="w-4 animation" src={cart_white} alt="cart logo" />
          <button className="cursor-pointer text-white">Add to Bag</button>
        </span>
        <div className="border border-pink-500"></div>
        <span className="text-black text-[13px] md:text-[15px] font-medium">
          <h2>The product is in stock and will be shipped within 1 day.</h2>
        </span>
      </div>
    </div>
  );
}

export default Order_Product;
