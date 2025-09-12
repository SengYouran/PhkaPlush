import React from "react";
import { Outlet } from "react-router-dom";
import ControllAccount from "./ControllAccount";

function Account() {
  return (
    <div className="mt-4">
      <Outlet />
    </div>
  );
}

export default Account;
