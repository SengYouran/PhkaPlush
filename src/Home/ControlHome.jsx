import React from "react";
import Banner from "./Banner";
import DisplayProduct from "./DisplayProduct";
import WhyUs from "./WhyUs";
import ShopProduct from "./ShopProduct";
import Feeds from "./Feeds";
import Footer from "../Page/Footer";
function ControlHome() {
  return (
    <div className="h-screen md:mt-6">
      <Banner />
      <DisplayProduct />
      <WhyUs />
      <ShopProduct />
      <Feeds />
      <Footer />
    </div>
  );
}

export default ControlHome;
