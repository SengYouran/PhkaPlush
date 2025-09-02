import React from "react";
import Banner from "./Banner";
import DisplayProduct from "./DisplayProduct";
import WhyUs from "./WhyUs";
import ShopProduct from "./ShopProduct";
import Feeds from "./Feeds";
function ControlHome() {
  return (
    <div className="h-screen ">
      <Banner />
      <DisplayProduct />
      <WhyUs />
      <ShopProduct />
      <Feeds />
    </div>
  );
}

export default ControlHome;
