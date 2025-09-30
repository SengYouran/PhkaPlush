import React, { useEffect, useState } from "react";
import { useControlData } from "../Context";

function Bags() {
  const [bags, setBags] = useState([]);
  const { userAccount, currentAccount } = useControlData();
  const [totalCounter, setTotalCounter] = useState(0);
  const [showBags, setShowBags] = useState(false);
  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => (check.id = currentAccount.id)
    );
    const filterStoreBag = userIndex?.storeBags || [];
    let totalCounter = 0;
    filterStoreBag.forEach((add) => {
      totalCounter += add.counter;
    });
    setTotalCounter(totalCounter);
    setBags(filterStoreBag);
  }, [userAccount]);
  return (
    <div className="flex flex-col gap-4 cursor-pointer">
      <span
        className="flex justify-between items-center"
        onClick={() => setShowBags(!showBags)}
      >
        <h2 className="text-xl font-medium cursor-pointer">
          My shopping bags ({totalCounter})
        </h2>
        <i
          className={`fa-solid fa-chevron-down text-[17px] mr-4 mt-2 transform transition-all duration-700 ease-in-out${
            showBags ? " rotate-180 " : ""
          }`}
        ></i>
      </span>
      <div className="border border-gray-400 "></div>
      <div className={`flex flex-col relative bg-gray-100 p-4`}>
        {bags.map((render) => {
          const discountRat =
            parseFloat(render.discount?.replace("%", "")) / 100 || 0;
          const positiveValue = Math.abs(discountRat);
          const discountAmount = render?.totalPrice * positiveValue;
          const afterDis = render?.totalPrice - discountAmount;
          return (
            <div className="flex justify-between items-center" key={render?.id}>
              <div className=" flex gap-2">
                <img
                  className="w-30 h-30 py-0.5"
                  src={render?.product}
                  alt="Product Item"
                />
                <span
                  className="
              flex flex-col gap-1"
                >
                  <h2 className="text-[15px] font-bold">
                    {render?.product_name}
                  </h2>
                  <p className="text-sm">Code:{render?.id}</p>
                  <p className="text-sm">Quantity x {render?.counter}</p>
                </span>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <p className="text-sm">US: {render?.product_price}</p>
                {render?.discount && (
                  <p className="text-sm">
                    ({render?.discount} off) US: ${discountAmount.toFixed(2)}
                  </p>
                )}
                <h2 className="text-[15px] text-red-500 font-medium">
                  US: ${afterDis.toFixed(2)}
                </h2>
              </div>
            </div>
          );
        })}
        <div
          className={`bg-white absolute inset-0 transition-all ease-in-out ${
            showBags
              ? "duration-700 transform translate-y-0 opacity-100 z-10 pointer-events-none"
              : "translate-y-80 opacity-0 -z-70 duration-200"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Bags;
