import React, { useEffect, useState } from "react";
import { useControlData } from "../Context";
import { Link } from "react-router-dom";

function Wishlist() {
  const {
    userAccount,
    currentAccount,
    setSaveWishlist,
    setUpdateWishlist,
    handleSaveWishlist,
    handleCart,
  } = useControlData();
  const [dataWishlist, setDataWishlist] = useState(null);
  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const getWishlist = userIndex?.storeWishlist;
    setDataWishlist(getWishlist);
  }, [userAccount]);
  return (
    <React.Fragment>
      {dataWishlist?.length === 0 ? (
        <div className="flex flex-col gap-4 justify-center items-center mt-0 md:mt-18">
          <h2 className="text-2xl font-bold text-center">
            Aww ..Snap. Your wish list is empty!
          </h2>
          <p className="text-sm font-medium text-center">
            Check out our latest products and choose what you love — including
            the must-have Plush 3 in 1!
          </p>
          <Link to={"/shop"}>
            <h2 className="bg-black cursor-pointer rounded text-white text-sm font-medium py-2 px-4">
              Start order now
            </h2>
          </Link>
        </div>
      ) : (
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-0 md:mt-8">
          {dataWishlist?.map((render) => (
            <div className="flex flex-col gap-4 relative " key={render?.id}>
              <i
                className="fa-solid fa-trash absolute top-0 right-0 cursor-pointer"
                onClick={() => handleSaveWishlist(render?.id)}
              ></i>
              <div className="flex gap-4">
                <span className="w-[40%]">
                  <img
                    className="w-[10rem] h-[9rem]"
                    src={render?.product}
                    alt=""
                  />
                </span>
                <div className="w-[60%]">
                  <p className="text-[15px] text-pink-500">
                    USD {render?.product_price}
                  </p>
                  <h2 className="text-[17px] font-bold">
                    {render?.product_name}
                  </h2>
                  <p className="text-sm ">Code: {render?.id}</p>
                  <p className="text-sm overflow-hidden text-ellipsis whitespace-nowrap w-[10rem]">
                    {render?.product_text}
                  </p>
                </div>
              </div>
              <button
                className="border py-1 rounded cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  handleSaveWishlist(render?.id);
                  handleCart(render?.id);
                }}
              >
                Move to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}

export default Wishlist;
