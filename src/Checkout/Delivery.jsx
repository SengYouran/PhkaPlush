import React, { useState } from "react";
import J_T from "../assets/logo/JT-Express-Logo.png";
import VTM from "../assets/logo/vireak-buntham.png";
import logo_shop from "../assets/logo/logo_shop.png";
import { useControlData } from "../Context";
const brandDelivery = [
  {
    id: "d1",
    brand_logo: VTM,
    brand_name: "Virak Buntham",
    price: "$1.25",
    days: "Delivery within 2-3 days.",
  },
  {
    id: "d2",
    brand_logo: J_T,
    brand_name: "J&T",
    price: "$1.25",
    days: "Delivery within 2-3 days.",
  },
  {
    id: "d3",
    brand_logo: logo_shop,
    brand_name: "Pich Pisey Bikers",
    price: "$1.25",
    days: "Delivery within 2-3 days.",
  },
];
function Delivery({ setBgDelivery, currently, selectedDelivery }) {
  const { handleDelivery } = useControlData();
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="flex justify-center items-center relative">
        <i
          className="fa-solid fa-less-than absolute left-2 top-1/2 -translate-1/2 cursor-pointer"
          onClick={() => setBgDelivery(false)}
        ></i>
        <h2 className="text-sm">Delivery Method</h2>
      </div>
      <div className="border border-gray-200"></div>
      <div className="bg-gray-300 flex items-center gap-2 py-2 px-3 mt-2">
        <i className="fa-solid fa-location-dot text-xl"></i>
        <h2 className="text-sm">{currently?.province},</h2>
        <h2 className="text-sm">{currently?.country}</h2>
      </div>
      <div>
        <h2>Delivery Method</h2>
        <div className="mt-4 overflow-y-auto max-h-[15rem] flex flex-col gap-2">
          {brandDelivery.map((render) => (
            <div
              className="bg-gray-200 flex justify-between px-4 py-2 rounded cursor-pointer"
              key={render?.id}
              id="checkDelivery"
              onClick={() => setSelected(render)}
            >
              <div className="flex items-center gap-2">
                <img
                  className="w-[45px] h-[45px] bg-white rounded-[50%]"
                  src={render?.brand_logo}
                  alt="Logo brand delivery"
                />
                <div className="flex flex-col gap-.5">
                  <h2 className="text-sm font-bold">{render?.brand_name}</h2>
                  <p className="text-sm">{render?.price}</p>
                  <p className="text-sm">{render?.days}</p>
                </div>
              </div>
              <label htmlFor="checkDelivery">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-pink-500 w-[18px] h-[18px]"
                  name="checkDelivery"
                  id={`checkDelivery-${render.id}`} // avoid duplicate IDs!
                  checked={
                    selectedDelivery?.id === render.id ||
                    selected?.id === render.id
                      ? true
                      : false
                  }
                  onChange={() => setSelected(render)}
                />
              </label>
            </div>
          ))}
        </div>
        <button
          className="bg-black text-sm font-bold text-center py-2 w-full mt-2 rounded text-white cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            handleDelivery(selected);
            setBgDelivery(false);
          }}
        >
          Apply
        </button>
      </div>
    </>
  );
}

export default Delivery;
