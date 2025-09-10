import React from "react";
import Product from "../Shop/Product";
import { Outlet } from "react-router-dom";
import Footer from "../Page/Footer";
Outlet;
function Shop() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Shop;
