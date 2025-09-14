import React, { useEffect, useState } from "react";
import { useControlData } from "../Context";
import { Link } from "react-router-dom";

function Cart() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(null);
  const [amountPayment, setAmountPayment] = useState(null);
  const [saveMoney, setSaveMoney] = useState(null);
  const [KHRTotal, setKHRTotal] = useState(null);
  const [bgCounter, setBgCounter] = useState(null);
  const {
    showCart,
    setShowCart,
    setBgCart,
    userAccount,
    currentAccount,
    setUserAccount,
    setCounters,
    handleDeleteItem,

  } = useControlData();
  const delivery = 1.25;
  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const storeBag = userIndex?.storeBags || [];
    setData(storeBag);

    let totalPrice = 0;
    let totalDiscountAmount = 0;

    storeBag.forEach((item) => {
      if (!item || !item.product_price) return;

      const pricePerItem = parseFloat(item.product_price.replace("$", ""));
      const quantity = item.counter || 1;
      const discountRat =
        parseFloat(item.discount?.replace("%", "")) / 100 || 0;

      const itemTotal = pricePerItem * quantity;
      totalPrice += itemTotal;

      const discountAmount = itemTotal * discountRat;
      totalDiscountAmount += discountAmount;
    });
    const positiveValue = Math.abs(totalDiscountAmount);
    const priceAfterDiscount = totalPrice - positiveValue;
    const deliveryFee = totalPrice >= 50 ? 0 : delivery;

    const amountPayment = priceAfterDiscount + deliveryFee;

    const khmerMoneyRaw = Math.round(amountPayment * 4000);
    const KHR = new Intl.NumberFormat("km-KH").format(khmerMoneyRaw) + "៛";

    setTotal(priceAfterDiscount.toFixed(2));
    setSaveMoney(positiveValue.toFixed(2));
    setAmountPayment(amountPayment.toFixed(2));
    setKHRTotal(KHR);
  }, [userAccount]);

  const moreCounter = Array.from({ length: 100 }, (_, i) => i + 1);
  function handleRenewCounter(newCounter, id) {
    setCounters((prev) => ({
      ...prev,
      [id]: newCounter,
    }));
    const updateAccount = [...userAccount];
    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );
    if (userIndex !== -1) {
      const updateUser = { ...updateAccount[userIndex] };
      updateUser.storeBags = updateUser.storeBags.map((render) =>
        render.id === id
          ? {
              ...render,
              counter: newCounter,
              totalPrice:
                newCounter *
                parseFloat(String(render.product_price).replace("$", "")),
            }
          : render
      );
      updateAccount[userIndex] = updateUser;
      setUserAccount(updateAccount);
    }
  }

  return (
    <div
      className={`fixed top-0 right-0 w-full md:w-[30rem] h-screen bg-white transition-all duration-500 ease-in-out
       ${
         showCart
           ? "z-80 opacity-100 transform translate-x-0 "
           : " translate-x-full -z-80 opacity-0 "
       }`}
    >
      <div className="flex">
        <div
          className="relative top-6 left-4 w-8 h-8 cursor-pointer transform -translate-y-1/2 group"
          onClick={() => {
            setShowCart(false);
            setBgCart(false);
          }}
        >
          <div className="absolute top-1/2 w-full h-[2px] bg-black origin-center transition-all duration-200 ease-in-out transform rotate-45 group-hover:rotate-0"></div>
          <div className="absolute top-1/2 w-full h-[2px] bg-black origin-center transition-all duration-200 ease-in-out transform -rotate-45 group-hover:rotate-0"></div>
        </div>
        <span className="absolute top-3 right-4 text-2xl text-black cursor-pointer">
          <i className="fa-regular fa-heart"></i>
        </span>
      </div>
      <div className="border border-gray-100 mt-4"></div>
      {data.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-2 mt-12">
          <div className="text-2xl">
            <h2 className="font-bold">Your Bag Is Empty</h2>
          </div>
          <div className="text-sm">
            <p className="text-center">
              Check out our latest skincare products and give your skin the best
              care it deserves.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap mt-4">
            <div className="bg-pink-500 hover:bg-pink-600 rounded py-1.5 px-4 cursor-pointer">
              <Link
                to={"/shop"}
                className="text-white"
                onClick={() => {
                  setShowCart(false);
                  setBgCart(false);
                }}
              >
                Start shopping
              </Link>
            </div>
            <div className="border border-gray-200 rounded py-1.5 px-4 hover:border-black">
              <Link
                to="/shop"
                className="checkFlower"
                onClick={() => {
                  setShowCart(false);
                  setBgCart(false);
                }}
              >
                More Shopping
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div className="mt-4 ml-4 overflow-y-auto max-h-[17rem] md:max-h-[14rem] custom-scrollY px-2">
            {data.map((render) => {
              const {
                id,
                product,
                product_name,
                discount,
                product_text,
                counter,
                totalPrice,
              } = render;

              const khmerMoneyRaw = Math.round(totalPrice * 4000);
              const KHR =
                new Intl.NumberFormat("km-KH").format(khmerMoneyRaw) + "៛";
              const discountRat =
                parseFloat(discount?.replace("%", "")) / 100 || 0;
              const afterDis = totalPrice * (1 + discountRat);

              const khmerMoneyDis = Math.round(afterDis * 4000);
              const KHRDis =
                new Intl.NumberFormat("km-KH").format(khmerMoneyDis) + "៛";
              return (
                <React.Fragment key={id}>
                  <div className=" flex items-center relative py-1 mt-2">
                    <i
                      class="fa-solid fa-trash absolute top-0 right-0 cursor-pointer"
                      onClick={() => handleDeleteItem(id)}
                    ></i>
                    <div className=" flex gap-4 ">
                      <div className="flex flex-col justify-center gap-2 ">
                        <span className="">
                          <img className="w-40 " src={product} alt="" />
                        </span>
                        <span className="flex items-center gap-2 cursor-pointer">
                          <i className="fa-regular fa-heart"></i>
                          <h2 className="  text-[13px] ">More to wishlist</h2>
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 ">
                        <span className="flex justify-between items-center gap-12">
                          <h2 className="text-[17px] font-medium">
                            {product_name.toUpperCase()}
                          </h2>
                        </span>
                        <p className="text-gray-500 text-[14px]">
                          {product_text}
                        </p>
                        <span
                          className="flex items-center gap-2"
                          onClick={() => setBgCounter(id)}
                        >
                          <h2 className="text-sm ">Quantity</h2>
                          <span className="border flex items-center gap-1 p-0.5 rounded cursor-pointer">
                            <p className="text-sm font-medium">{counter}</p>
                            <i className="fa-solid fa-chevron-down text-sm "></i>
                          </span>
                        </span>
                        <div
                          className={`custom-scroll-counter py.5 absolute  top-0 left-1/2 bg-white w-13 shadow overflow-y-auto max-h-[12rem]
                          ${
                            bgCounter === id
                              ? "z-20 opacity-100"
                              : "opacity-0 -z-20"
                          }`}
                        >
                          {moreCounter.map((render, index) => (
                            <p
                              className={`text-center hover:bg-gray-50 cursor-pointer ${
                                render === counter
                                  ? "bg-gray-100 w-full py.5"
                                  : ""
                              }`}
                              key={index}
                              onClick={() => {
                                handleRenewCounter(render, id);
                                setBgCounter(null);
                              }}
                            >
                              {render}
                            </p>
                          ))}
                        </div>
                        <div
                          className={`bg-gray-100 absolute inset-0   ${
                            bgCounter === id
                              ? "opacity-70 z-10"
                              : "-z-10 opacity-0"
                          }`}
                          onClick={() => setBgCounter(null)}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 absolute top-20 md:top-30 right-0">
                      {discountRat != 0 ? (
                        <>
                          <h2 className="text-sm">
                            USD {""}
                            <span
                              className={`${
                                afterDis === 0 ? "" : "line-through"
                              }`}
                            >
                              ${totalPrice.toFixed(2)}
                            </span>
                            <p className="text-sm">
                              USD{" "}
                              <span className="text-pink-600 ">
                                ${afterDis.toFixed(2)}
                              </span>
                            </p>
                          </h2>
                          <h2 className="text-sm -mt-1">
                            KHR <span className="text-pink-600">{KHRDis}</span>
                          </h2>
                        </>
                      ) : (
                        <>
                          <h2 className="text-sm">
                            USD{" "}
                            <span className={`text-pink-600`}>
                              ${totalPrice.toFixed(2)}
                            </span>
                          </h2>
                          <h2 className="text-sm">
                            KHR <span className="text-pink-600">{KHR}</span>
                          </h2>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="border border-gray-200"></div>
                </React.Fragment>
              );
            })}
          </div>
          <div className="border border-gray-100 h-2 mt-4 bg-gray-300 rounded ml-1 mr-1"></div>
          <div className="mt-2.5 mx-2.5 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h2 className="text-[17px] font-medium">Total</h2>
              <p className="text-[17px] font-medium">${total}</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-[17px] ">Save</h2>
              <p className="text-[17px] ">${saveMoney}</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-[17px] ">Delivery</h2>
              <p
                className={`text-[15px] ${total >= 50 ? " line-through" : ""}`}
              >
                ${delivery}
              </p>
            </div>
            <div className="border opacity-30"></div>
            <div className="flex justify-between items-center font-bold">
              <h2 className="text-[18px]">Amount to pay</h2>
              <span>
                <p className="text-[18px]">${amountPayment}</p>
                <p className="text-[18px]">${KHRTotal}</p>
              </span>
            </div>
          </div>
          <Link
            to={"/checkout"}
            className="mt-4 ml-5"
            onClick={() => {
              setBgCart(false);
              setShowCart(false);
            }}
          >
            <button
              className="bg-black text-white text-[17px] w-[95%] py-2 rounded cursor-pointer hover:bg-gray-800"
              
            >
              Proceed to checkout
            </button>
          </Link>
        </React.Fragment>
      )}
    </div>
  );
}

export default Cart;
