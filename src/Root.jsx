import React from "react";
import { Outlet } from "react-router-dom";
import { HamMenuProvider } from "./Services/Context/HamMenuContext";
import { DropDownTogglerProvider } from "./Services/Context/DropDownTogglerContext";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export default function Root() {
  return (
    <div>
      <HamMenuProvider>
        <DropDownTogglerProvider>
          <Header />
          <Outlet />
          <Footer />
        </DropDownTogglerProvider>
      </HamMenuProvider>
    </div>
  );
}
