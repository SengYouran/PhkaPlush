import React from "react";
import Product from "../Shop/Product";
import { Outlet } from "react-router-dom";
Outlet;
function Shop() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Shop;
