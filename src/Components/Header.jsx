import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <div>
      <NavLink to="/">Home page</NavLink>
      <NavLink to="/DriversPage">Drivers page</NavLink>
      <NavLink to="/BusinessPage">Business page</NavLink>
    </div>
  );
}
