import React, { useEffect, useState } from "react";
import truckImage from "../assets/logo/Truck.png";
import { useNavigate } from "react-router-dom";
import { useControlData } from "../Context";

export default function CheckoutSuccess() {
  const [animateTruck, setAnimateTruck] = useState(false);
  const [showConfirmedText, setShowConfirmedText] = useState(false);
  const [showPleaseWait, setShowPleaseWait] = useState(false);
  const [bgCheckout, setBgCheckout] = useState(false);
  const navigator = useNavigate();
  useEffect(() => {
    // Start truck animation
    setAnimateTruck(true);
    setBgCheckout(true);
    // Show "Order Confirmed!" after 1s
    const confirmTimer = setTimeout(() => {
      setShowConfirmedText(true);
    }, 3500);

    // Show "Please wait..." after 3s
    const showWaitTimer = setTimeout(() => {
      setShowPleaseWait(true);
    }, 2000);

    // Hide "Please wait..." after 3.5s (500ms display)
    const hideWaitTimer = setTimeout(() => {
      setShowPleaseWait(false);
    }, 3500);
    const doneCheckout = setTimeout(() => {
      setBgCheckout(false);
      navigator("/");
    }, 5000);
    return () => {
      clearTimeout(confirmTimer);
      clearTimeout(showWaitTimer);
      clearTimeout(hideWaitTimer);
      clearTimeout(doneCheckout);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="overflow-hidden fixed z-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[20rem] h-64 flex flex-col items-center justify-center rounded-lg shadow-lg">
        {/* ✅ Order Confirmed Text */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-1/2 transform transition-all duration-700 ease-in-out ${
            showConfirmedText ? "scale-100" : "scale-0"
          }`}
        >
          {showConfirmedText && (
            <div className={` flex flex-col items-center gap-2`}>
              <h2 className="text-2xl font-bold text-green-600 text-center">
                Successful
              </h2>
              <div className="bg-green-500 px-3 py-2 rounded-full">
                <i className="fa-solid fa-check text-white text-2xl"></i>
              </div>
            </div>
          )}
        </div>
        {/* 🚚 Truck */}
        <img
          src={truckImage}
          alt="Delivery Truck"
          className={`w-24 h-24 transition-transform duration-[7000ms] ease-in-out
            ${animateTruck ? "translate-x-[100vw]" : "-translate-x-50"}`}
        />

        {/* ⏳ Please wait... */}
        {showPleaseWait && (
          <p className="absolute top-1/2 left-1/2 -translate-1/2 text-sm text-gray-500 animate-pulse">
            Please wait...
          </p>
        )}
      </div>
      <div
        className={`fixed inset-0 bg-black  ${
          bgCheckout ? "block opacity-10 z-80" : "hidden opacity-0 -z-10"
        }`}
      ></div>
    </React.Fragment>
  );
}
