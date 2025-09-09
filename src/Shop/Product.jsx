import React from "react";
import { data_product } from "../Data/ProductInfomation";
import cart_white from "../assets/logo/cart-white.png";
import { Link } from "react-router-dom";
import useInViewAnimation from "../Custom_hook/useInViewAnimation.js";

function Product() {
  const productRefs = useInViewAnimation("active", 200); // 100ms delay per product

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data_product.map((render, index) => (
          <div
            key={render?.id}
            ref={(el) => (productRefs.current[index] = el)}
            className="fade-in bg-white  rounded-sm p-2 flex flex-col gap-1 group transition-all duration-800 ease-in-out"
          >
            <i className="fa-solid fa-heart text-2xl text-pink-300 cursor-pointer"></i>

            <Link
              to={`/shop/${render?.id}`}
              className="flex justify-center items-center transition-transform duration-600 transform group-hover:scale-110"
            >
              <img
                className="w-[230px] h-[180px]  cursor-pointer"
                src={render?.product}
                alt={render.product_name}
              />
            </Link>

            <h2
              className={`${render?.colorText} text-xl font-medium font-rowdies`}
            >
              {render?.product_name}
            </h2>

            <p className="text-[12px] text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap w-[17rem]">
              {render?.product_text}
            </p>

            <div className="flex justify-between items-center">
              <p className="text-sm font-bold text-pink-600">
                {render?.product_price}
              </p>
              <div className="flex items-center gap-2">
                <Link
                  to={`/shop/${render?.id}`}
                  className="text-sm bg-gray-200 rounded py-1 px-2 cursor-pointer hover:bg-gray-300"
                >
                  Details
                </Link>
                <span className="bg-pink-200 hover:bg-pink-300 cursor-pointer py-1 px-2 rounded flex items-center gap-1.5">
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
