import React from "react";
import ShippAddress from "../Checkout/ShippAddress";
import Bags from "../Checkout/Bags";
import Bank from "../Checkout/Bank";
import Contact from "../Checkout/Contact";
import Gift_Point from "../Checkout/Gift_Point";

function Checkout() {
  
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-2">
        <div className="w-full">
          <h2 className="text-xl font-medium">Delivery Address</h2>
          <ShippAddress />
        </div>
        <div className="mt-4">
          <Bags />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="text-xl font-medium">Payment</h2>
          <Bank />
        </div>
        <div>
          <h2 className="text-xl font-medium mt-8">Preferred contact line</h2>
          <Contact />
        </div>
        <div
          className="mt-4
        "
        >
          <Gift_Point />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
