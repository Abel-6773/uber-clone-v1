import { NavLink } from "react-router-dom";
import BtnUnderline from "../UI/BtnUnderline";
import "./BeingBuilt.css";

export default function BeingBuilt() {
  return (
    <section className="being-built">
      <div class="masthead">
        <h1 class="fst-italic txt-lg">
          This page is currently uder development
        </h1>
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
      <div className="img-container">
        <img
          src="\BeingBuiltAssets\tingey-injury-law-firm-rv9NXAvl2gg-unsplash.jpg"
          alt="Uber site image"
        />
      </div>
    </section>
  );
}
