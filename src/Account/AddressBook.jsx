import React, { useEffect, useState } from "react";
import { useControlData } from "../Context";
import { provinces } from "../Data/Feed";

function AddressBook() {
  const {
    userAccount,
    currentAccount,
    deliveryAdd,
    setDeliveryAdd,
    deliveryAddressProvince,
    handleSaveAddress,
    showHidden,
  } = useControlData();
  const [dateAddress, setDataAddress] = useState(null);
  const [bgForm2, setBgForm2] = useState(false);
  const [showProvinces, setShowProvinces] = useState(false);
  const [currently, setCurrently] = useState(false);
  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const shippingAddres = userIndex?.shippingAddress;
    setDataAddress(shippingAddres);
  }, [userAccount, currentAccount]);
  return (
    <div
      className={`md:w-[73%] md:ml-[27%] mt-4 min-h-[75vh] ${
        showHidden ? "hidden md:flex" : "flex"
      } flex-col gap-4`}
    >
      <h2 className={`text-center text-xl font-medium  `}>Address Book</h2>
      <div
        className={`justify-between items-center mt-2 border px-2 py-4 md:py-8 md:px-10 ${
          bgForm2 ? "hidden" : "flex"
        }`}
      >
        <h2 className="text-[17px] font-medium">{dateAddress?.fullname}</h2>
        <div className="flex flex-col gap-2">
          <h2 className="text-[17px]">{dateAddress?.province}</h2>
          <h2 className="text-[17px]">{dateAddress?.currentAddress}</h2>
          <p className="bg-gray-300 p-0.5 w-17 text-sm text-center">Default</p>
        </div>
        <h2
          className="text-[17px] cursor-pointer font-medium"
          onClick={() => {
            setDeliveryAdd(dateAddress);
            setBgForm2(true);
            setCurrently(true);
          }}
        >
          Edit
        </h2>
      </div>
      <div
        className={`cursor-pointer ${bgForm2 ? "hidden" : "block"}`}
        onClick={() => {
          setDeliveryAdd(null);
          setBgForm2(true);
        }}
      >
        <h2 className="text-xl text-right text-black font-bold">
          Add new address
        </h2>
      </div>

      <div
        className={`flex-col gap-4 px-6 py-4 ${bgForm2 ? "flex" : "hidden"}`}
      >
        <div
          className={`items-center gap-2 border px-2 py-1 w-20 -mt-4 cursor-pointer rounded ${
            currently ? "hidden" : "flex"
          }`}
          onClick={() => setBgForm2(false)}
        >
          <i className="fa-solid fa-person-walking-arrow-right"></i>
          <h2>Back</h2>
        </div>
        <h2 className="text-[15px] font-bold">EDIT ADDRESS</h2>
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
                value={deliveryAdd?.country ?? "Cambodia"}
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

            setBgForm2(false);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddressBook;
