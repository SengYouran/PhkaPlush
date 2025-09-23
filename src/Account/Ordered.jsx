import React, { useEffect, useState } from "react";
import { useControlData } from "../Context";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import DetailPurchased from "./DetailPurchased";
function Ordered() {
  const { userAccount, currentAccount,showHidden } = useControlData();
  const [currentPurchased, setCurrentPurchased] = useState([]);
  const { setDetail } = useControlData();
  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const selcectPruchased = userIndex?.storepurchased || [];
    setCurrentPurchased(selcectPruchased);
  }, [userAccount]);
  const navigate = useNavigate();
  function handleDetialProduct(id) {
    navigate(`detail/${id}`);
  }
  const location = useLocation();
  const isDetailPage = location.pathname.includes("/detail/");
  return (
    <div className={`md:w-[73%] md:ml-[27%] mt-4 min-h-[70vh] ${
        showHidden ? "hidden md:blcok" : "blcok"
      }`}>
      <h2
        className={`${
          isDetailPage ? "hidden" : "block text-center text-xl font-medium"
        }`}
      >
        Orders and return
      </h2>
      {currentPurchased?.length === undefined ? (
        <div className="flex flex-col justify-center items-center gap-4 mt-8">
          <h2 className="no_pruchased text-center text-gray-600 text-lg font-medium">
            You haven’t made any purchases yet.
            <br />
            Once you place an order, it will show up here.
          </h2>
          <Link
            to="/shop"
            className="check_product bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition"
          >
            Start Shopping Now
          </Link>
        </div>
      ) : (
        <div className="flex flex-col">
          <div
            className={`${isDetailPage ? "hidden" : "flex flex-col gap-2"} `}
          >
            {currentPurchased?.map((render, index) => {
              const dateOftime = render?.dateOfPurchasing.split(",")[0];
              return (
                <div className="flex items-center gap-4 " key={index}>
                  <img
                    className="w-15 h-15"
                    src={render?.product}
                    alt="Product picture"
                  />
                  <h2 className="text-[15px] font-medium w-40 overflow-hidden text-ellipsis whitespace-nowrap">
                    {render?.product_name}
                  </h2>
                  <p className="w-12 text-sm">Qty.{render?.counter}</p>
                  <h2 className="text-sm">{render?.product_price}</h2>
                  <h2 className="text-sm hidden md:block">{dateOftime}</h2>
                  <h2 className="w-12 text-sm hidden md:block">
                    ${render?.totalPrice.toFixed(2)}
                  </h2>
                  <h2
                    className="cursor-pointer text-sm font-medium"
                    onClick={() => {
                      handleDetialProduct(render?.id);
                      setDetail(true);
                      
                    }}
                  >
                    Detail
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Ordered;
