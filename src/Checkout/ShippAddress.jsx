import React, { useEffect, useState } from "react";
import { useControlData } from "../Context";
import vireak_buntham from "../assets/logo/vireak-buntham.png";
import Delivery from "./Delivery";
import { provinces } from "../Data/Feed";
function ShippAddress() {
  const {
    deliveryAdd,
    setDeliveryAdd,
    handleSaveAddress,
    deliveryAddressProvince,
    userAccount,
    currentAccount,
  } = useControlData();
  const [showProvinces, setShowProvinces] = useState(false);
  const [currently, setCurrently] = useState(null);
  const [formAddress, setFormAddress] = useState(false);
  const [bgForm1, setBgForm1] = useState(false);
  const [bgForm2, setBgForm2] = useState(false);
  const [bgDelivery, setBgDelivery] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const shippingAddress = userIndex?.shippingAddress;
    const shippingDelivery = userIndex?.shippingDelivery;
    setCurrently(shippingAddress);
    setSelectedDelivery(shippingDelivery);
  }, [userAccount]);

  return (
    <section>
      <div className="flex flex-col gap-6 bg-gray-100 py-10 px-4 mt-2 rounded">
        <div
          className={`bg-gray-200 fixed inset-0 ${
            currently == undefined ? "z-75 opacity-70" : "-z-75 opacity-0"
          }`}
          onClick={() => {
            setBgForm2(true), setFormAddress(!formAddress);
          }}
        ></div>
        {currently == undefined ? (
          <div
            className={`fixed top-1/2 w-full md:w-[25rem] rounded left-1/2 -translate-1/2 bg-white py-8 px-12 flex flex-col justify-center items-center gap-2
               ${
                 formAddress
                   ? "transform scale-0 opacity-0 -z-80"
                   : "scale-110 opacity-100 z-80"
               }`}
          >
            <i
              className="fa-solid fa-triangle-exclamation text-2xl text-white bg-red-600 rounded-4xl py-1.5 px-2
            "
            ></i>
            <h2 className="text-[15px] font-medium">
              You don't has delivery address
            </h2>
            <p className="text-sm">please add your delivery Address</p>
            <div className="flex items-center gap-2">
              <h2
                className="border border-black py-1 px-2 text-sm rounded cursor-pointer"
                onClick={() => {
                  setFormAddress(!formAddress);
                  setBgForm2(true);
                }}
              >
                No, Back
              </h2>
              <h2
                className="bg-pink-500 text-white hover:bg-pink-600 py-1 px-2 text-sm rounded cursor-pointer"
                onClick={() => {
                  setFormAddress(!formAddress);
                  setBgForm2(true);
                }}
              >
                Yes, Add
              </h2>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-1.5">
              <label htmlFor="shippAddress">
                <input
                  type="checkbox"
                  className=" accent-pink-500 w-[17px] h-[15px]"
                  name="shippAddress"
                  id="shipAddress"
                  checked
                  readOnly
                />
              </label>
              <div className="flex flex-col gap-1">
                <h2 className="text-[16px] font-bold">{currently?.fullname}</h2>
                <p className="text-[15px]">{currently?.province}</p>
                <p className="text-[15px]">{currently?.currentAddress}</p>
                <p className="text-[15px]">{currently?.telephone}</p>
              </div>
            </div>
            <div
              className="flex justify-center itmes-center gap-2 cursor-pointer text-gray-400"
              onClick={() => setBgForm1(true)}
            >
              <h2 className="text-sm">Change Address</h2>
              <i className="fa-solid fa-greater-than text-sm mt-1"></i>
            </div>
          </div>
        )}
        <div className="border border-gray-200"></div>
        <div className="flex justify-between items-center">
          {selectedDelivery ? (
            <div className="flex items-center gap-1">
              <div className="w-10 h-10 rounded-[50%]">
                <img
                  src={selectedDelivery.brand_logo}
                  alt="Logo Brand delivery"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[15px]">
                  Delivery: {selectedDelivery.price}
                </h2>
                <p className="text-xs">
                  {selectedDelivery.brand_name} {selectedDelivery.days}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <div className="w-10 h-10 rounded-[50%]">
                <img src={vireak_buntham} alt="Logo Brand delivery" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[15px]">Delivery: $1.25</h2>
                <p className="text-xs">
                  Virak Buntham Delivery within 2-3 days.
                </p>
              </div>
            </div>
          )}
          <div
            className="flex justify-center itmes-center gap-2 cursor-pointer text-gray-400"
            onClick={() => setBgDelivery(true)}
          >
            <h2 className="text-sm">More</h2>
            <i className="fa-solid fa-greater-than text-sm mt-1"></i>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 bg-white  h-full flex flex-col gap-6 py-8 px-4 transition-all duration-500 ease-in-out
        ${
          bgForm1
            ? "z-80 opacity-100 w-full md:w-[35rem] "
            : "-z-80 opacity-0 w-10"
        }`}
      >
        <div className="flex justify-center items-center relative">
          <i
            className="fa-solid fa-less-than absolute left-2 top-1/2 -translate-1/2 cursor-pointer"
            onClick={() => setBgForm1(false)}
          ></i>
          <h2 className="">Address book</h2>
        </div>
        <div className="border border-gray-200"></div>
        <div className="flex justify-between items-center border py-2 px-2.5 rounded">
          <div className="flex items-center gap-1.5">
            <label htmlFor="shippAddress">
              <input
                type="checkbox"
                className=" accent-pink-500 w-[17px] h-[15px]"
                name="shippAddress"
                id="shipAddress"
                checked
                readOnly
              />
            </label>
            <div className="flex flex-col gap-1">
              <h2 className="text-[16px] font-bold">{currently?.fullname}</h2>
              <p className="text-[15px]">{currently?.province}</p>
              <p className="text-[15px]">{currently?.currentAddress}</p>
              <p className="text-[15px]">{currently?.telephone}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="bg-gray-200 text-sm p-1">Default</h2>
            <span
              className="flex justify-center items-center cursor-pointer"
              onClick={() => {
                setBgForm2(true);
                setDeliveryAdd(currently);
              }}
            >
              <h2 className="text-sm font-bold">Edit</h2>
              <i className="fa-solid fa-pencil -mt-2 text-sm"></i>
            </span>
          </div>
        </div>
        <div className="absolute bottom-8 left-4 bg-black w-[94%] py-2 rounded text-white cursor-pointer">
          <h2
            className="text-center"
            onClick={() => {
              setDeliveryAdd({
                fullname: "",
                telephone: "",
                country: currently?.country,
                currentAddress: "",
                province: "",
              });
              setBgForm2(true);
            }}
          >
            Add new ddress
          </h2>
        </div>
      </div>
      <div
        className={`absolute inset-0 bg-gray-100 z-75 opacity-70 ${
          bgForm1 ? "block" : "hidden"
        }`}
        onClick={() => setBgForm1(false)}
      ></div>
      <div
        className={`absolute inset-0 bg-gray-200 z-85 opacity-70 ${
          bgForm2 ? "blcok" : "hidden"
        }`}
        onClick={() => setBgForm2(false)}
      ></div>
      <form
        className={`fixed top-1/2 left-1/2 -translate-1/2 bg-white w-full md:w-auto h-full transition-all duration-500 ease-in-out
         ${
           bgForm2
             ? "transform scale-100 opacity-100 z-90"
             : " scale-0 -z-90 opacity-0"
         }`}
      >
        <div
          className="absolute top-6 right-4 w-8 h-8 cursor-pointer transform -translate-y-1/2 group"
          onClick={() => setBgForm2(false)}
        >
          <div className="absolute top-1/2 w-full h-[2px] bg-black origin-center transition-all duration-200 ease-in-out transform rotate-45 group-hover:rotate-0"></div>
          <div className="absolute top-1/2 w-full h-[2px] bg-black origin-center transition-all duration-200 ease-in-out transform -rotate-45 group-hover:rotate-0"></div>
        </div>
        <div className="flex flex-col gap-4 px-6 py-4 mt-4">
          <h2 className="text-2xl font-bold">EDIT ADDRESS</h2>
          <label htmlFor="shippFullname">
            <h2 className="text-sm">Fullname</h2>
            <input
              className="border border-pink-500 w-full h-[2.5rem] pl-4 rounded outline-0"
              type="text"
              name="shippFullname"
              id="shippFullname"
              placeholder="Enter your name"
              value={deliveryAdd?.fullname ?? ""}
              onChange={(e) =>
                setDeliveryAdd({ ...deliveryAdd, fullname: e.target.value })
              }
            />
          </label>
          <label htmlFor="shipppPhone" className="flex items-center gap-2">
            <input
              className="border mt-6 border-gray-500 w-[20%] h-[2.5rem] pl-4 rounded outline-0"
              type="text"
              value={"+855"}
              name="shipppCode"
              id="shipppCode"
              disabled
            />
            <span className="w-[80%]">
              <h2 className="text-sm">Telephone(Required)</h2>
              <input
                className="border border-pink-500 w-full h-[2.5rem] pl-4 rounded outline-0"
                type="tel"
                inputMode="numeric"
                name="shipppPhone"
                id="shipppPhone"
                placeholder="Enter your phone number"
                value={deliveryAdd?.telephone ?? ""}
                onChange={(e) =>
                  setDeliveryAdd({ ...deliveryAdd, telephone: e.target.value })
                }
              />
            </span>
          </label>
          <label htmlFor="shippAddress">
            <h2 className="text-sm">Address(Required)</h2>
            <input
              className="border border-pink-500 w-full h-[2.5rem] pl-4 rounded outline-0"
              type="text"
              name="shippAddress"
              id="shippAddress"
              placeholder="Enter your community"
              value={deliveryAdd?.currentAddress ?? ""}
              onChange={(e) =>
                setDeliveryAdd({
                  ...deliveryAdd,
                  currentAddress: e.target.value,
                })
              }
            />
          </label>
          <div className="flex flex-col gap-1">
            <h2 className="text-[15px] font-medium">Available country</h2>
            <div className="flex itmes-center gap-8">
              <div className="flex flex-col gap-1 relative">
                <h2 className="text-sm">Country</h2>
                <input
                  type="text"
                  name="countryCheckout"
                  className="text-sm font-medium border border-pink-500 pl-2 w-full h-[2.5rem]"
                  value={deliveryAdd?.country ?? ""}
                  readOnly
                />
                <i className="fa-solid fa-chevron-down absolute top-9 right-2 text-sm"></i>
              </div>
              <div className="flex flex-col gap-1 relative cursor-pointer">
                <h2 className="text-sm ">City / Province</h2>
                <input
                  type="text"
                  className="text-sm font-medium border border-pink-500 pl-2 w-full h-[2.5rem] cursor-pointer outline-0"
                  name="provinceCheckout"
                  readOnly
                  value={deliveryAdd?.province ?? ""}
                  onClick={() => setShowProvinces(!showProvinces)}
                />
                <i
                  className="fa-solid fa-chevron-down absolute top-9 right-2 text-sm"
                  onClick={() => setShowProvinces(!showProvinces)}
                ></i>
                <div
                  className={`list_provinces absolute bottom-full flex flex-col gap-2 border border-pink-500 w-full max-h-40 bg-white overflow-y-auto
              ${showProvinces ? "block" : "hidden"}`}
                >
                  {provinces.map((render, index) => {
                    return (
                      <h2
                        className=" pl-2 hover:bg-gray-200"
                        key={index}
                        //onClick={() => handleSelectProvince(render)}
                        onClick={() => {
                          deliveryAddressProvince(render);
                          setShowProvinces(!showProvinces);
                        }}
                      >
                        {render}
                      </h2>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <button
            className="mt-12 bg-black w-full h-[2.5rem] rounded text-white cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleSaveAddress();
              setFormAddress(!formAddress);
              setBgForm2(false);
            }}
          >
            Save
          </button>
        </div>
      </form>
      <div
        className={`bg-gray-200 fixed inset-0 ${
          bgDelivery ? "z-75 opacity-70" : "-z-75 opacity-0"
        }`}
        onClick={() => setBgDelivery(false)}
      ></div>
      <div
        className={`bg-white fixed top-0 right-0 h-full flex flex-col gap-6 py-8 px-4 transition-all duration-500 ease-in-out
    ${
      bgDelivery
        ? "w-full md:w-[35rem] z-80 opacity-100"
        : "-z-80 opacity-0 w-10"
    }`}
      >
        <Delivery
          bgDelivery={bgDelivery}
          setBgDelivery={setBgDelivery}
          currently={currently}
          selectedDelivery={selectedDelivery}
        />
      </div>
    </section>
  );
}

export default ShippAddress;
