import React from "react";
import DriversHero from "../Components/DriversPage/DriversHero";
import DriversNav from "../Components/DriversPage/DriversNav";
import DriversAbout from "../Components/DriversPage/DriversAbout";
import DriversGetStarted from "../Components/DriversPage/DriversGetStarted";
import DriversExtras from "../Components/DriversPage/DriversExtras";
import DriversApp from "../Components/DriversPage/DriversApp";
import DownloadAPP from "../Components/DriversPage/DownloadAPP";
import DriversSignUp from "../Components/DriversPage/DriversSignUp";
import DriversFaq from "../Components/DriversPage/DriversFaq";

export default function DriversPage() {
  return (
    <div>
      <DriversNav />
      <DriversHero />
      <DriversAbout />
      <DriversGetStarted />
      <DriversExtras />
      <DriversApp />
      <DriversFaq />
      <DownloadAPP />
      <DriversSignUp />
    </div>
  );
}
