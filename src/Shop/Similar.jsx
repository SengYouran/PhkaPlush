import React, { useEffect, useState } from "react";
import useInViewAnimation from "../Custom_hook/useInViewAnimation";
import cart_white from "../assets/logo/cart-white.png";
import { Link } from "react-router-dom";
import { data_product } from "../Data/ProductInfomation";

function Similar({ id }) {
  const [similar, setSimilar] = useState([]);
  const productRefs = useInViewAnimation("active", 200);

  useEffect(() => {

    const filterSimilar = data_product?.filter((item) => item.id != id);
    setSimilar(filterSimilar);
  }, [id]);

  return (
    <section className="mt-4">
      <h2 className="text-2xl font-rowdies">Similar Product</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {similar.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (productRefs.current[index] = el)}
            className="bg-white rounded-sm p-2 flex flex-col gap-1 group transition-all duration-800 ease-in-out"
          >
            <i className="fa-solid fa-heart text-2xl text-pink-300 cursor-pointer"></i>
            <Link
              to={`/shop/${item.id}`}
              className="flex justify-center items-center transition-transform duration-300 transform group-hover:scale-110"
            >
              <img
                className="w-[230px] h-[180px] cursor-pointer"
                src={item.product}
                alt={item.product_name}
              />
            </Link>
            <h2 className={`${item.colorText} text-xl font-medium font-rowdies`}>
              {item.product_name}
            </h2>
            <p className="text-[12px] text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap w-[17rem]">
              {item.product_text}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold text-pink-600">{item.product_price}</p>
              <div className="flex items-center gap-2">
                <Link
                  to={`/shop/${item.id}`}
                  className="text-sm bg-gray-200 rounded py-1 px-2 cursor-pointer hover:bg-gray-300"
                >
                  Details
                </Link>
                <span className="bg-pink-200 hover:bg-pink-300 cursor-pointer py-1 px-2 rounded flex items-center gap-1.5">
                  <img className="w-4 animation" src={cart_white} alt="cart logo" />
                  <button className="text-gray-700 cursor-pointer">Add to Bag</button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Similar;
