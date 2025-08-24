import React from "react";
import { Outlet } from "react-router-dom";
import Media_Large from "../Header/Media_Large";
import Mobile from "../Header/Mobile";
function RootLayout() {
  return (
    <div>
      <Media_Large />
      <Mobile />
      <main className="pt-18 mx-8 md:mx-32"> {/* ← បន្ថែម padding-top ដើម្បីចៀសពី header */}
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
