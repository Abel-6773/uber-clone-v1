import "./PageNotFound.css";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <section className="page-not-found">
      <div class="">
        <h1 class=" txt-xl">This page is currently uder development</h1>
        <p class="txt-sm">
          We're working hard to finish the development of this site. Please use
          the links below to view the already available pages
        </p>
        <div className="buttons">
          <NavLink to="/">
            <BtnUnderline BtnTxt="Home" BtnStyle="light"></BtnUnderline>
          </NavLink>
          <NavLink to="/DriversPage">
            <BtnUnderline BtnTxt="For Drivers" BtnStyle="light"></BtnUnderline>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
