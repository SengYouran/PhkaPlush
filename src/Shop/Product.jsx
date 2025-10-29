import React, { useEffect, useState } from "react";
import { data_product } from "../Data/ProductInfomation";
import cart_white from "../assets/logo/cart-white.png";
import { Link } from "react-router-dom";
import useInViewAnimation from "../Custom_hook/useInViewAnimation.js";
import { useControlData } from "../Context.jsx";
function Product() {
  const productRefs = useInViewAnimation("active", 200); // 100ms delay per product
  const {
    handleCart,
    handleSaveWishlist,
    userAccount,
    currentAccount,
    showData,
    setShowData,
  } = useControlData();
  const [currentWishlist, setCurrentWishlist] = useState({});

  useEffect(() => {
    const getWishlistActive = userAccount.find(
      (check) => check.id === currentAccount.id
    );

    const selectWishlist = getWishlistActive?.activeWishlist;
    setCurrentWishlist(selectWishlist);
  }, [userAccount]);
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {showData.map((render, index) => (
          <div
            key={render?.id}
            ref={(el) => (productRefs.current[index] = el)}
            className="fade-in bg-white overflow-hidden rounded-sm p-2 flex flex-col gap-1 group transition-all duration-800 ease-in-out"
          >
            <span
              className={` text-center text-white opacity-90 p-0.5 absolute z-10 ${
                render?.discount != null ? "bg-red-500 w-10" : ""
              }`}
            >
              {render?.discount}
            </span>
            <Link
              to={`/shop/${render?.id}`}
              className="flex justify-center items-center transition-transform duration-600 transform group-hover:scale-110"
            >
              <img
                className="w-[220px] h-[170px]  cursor-pointer"
                src={render?.product}
                alt={render.product_name}
              />
            </Link>

            <span className="flex justify-between items-center">
              <h2
                className={`${render?.colorText} text-xl font-medium font-rowdies`}
              >
                {render?.product_name}
              </h2>
              <span className="" onClick={() => handleSaveWishlist(render?.id)}>
                {currentWishlist?.[render?.id] ? (
                  <i className="fa-solid fa-heart text-xl text-black cursor-pointer relative z-10"></i>
                ) : (
                  <i className="fa-regular fa-heart text-xl text-black cursor-pointer relative z-10"></i>
                )}
              </span>
            </span>

            <p className="text-[12px] text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap w-[17rem]">
              {render?.product_text}
            </p>

            <div className="flex justify-between items-center">
              <p className="text-[17px] font-bold text-pink-600">
                {render?.product_price}
              </p>
              <div className="flex items-center gap-2">
                <Link
                  to={`/shop/${render?.id}`}
                  className="text-sm bg-gray-200 rounded py-1 px-2 cursor-pointer hover:bg-gray-300"
                >
                  Details
                </Link>
                <span
                  className="bg-pink-200 hover:bg-pink-300 cursor-pointer py-1 px-2 rounded flex items-center gap-1.5"
                  onClick={() => handleCart(render?.id)}
                >
                  <img
                    className="w-4 animation"
                    src={cart_white}
                    alt="cart logo"
                  />
                  <button className="text-gray-700 cursor-pointer">
                    Add to Bag
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;
