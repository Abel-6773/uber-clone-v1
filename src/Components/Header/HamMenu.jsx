import "./HamMenu.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import HamMenuContext from "../../Services/Context/HamMenuContext";
import NestedDropDown from "./NestedDropDown";

export default function HamMenu() {
  const { HamMenuActive } = useContext(HamMenuContext);
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const toggleActive = function () {
    setIsDropDownActive((c) => {
      return !c;
    });
  };

  return (
    <div className={HamMenuActive ? "Ham-Menu active" : "Ham-Menu"}>
      <ul className="txt-lg">
        <NavLink>
          <li>Passing</li>
        </NavLink>
        <NavLink to="DriversPage">
          <li>For drivers</li>
        </NavLink>
        <NavLink>
          <li>Business</li>
        </NavLink>
        <NavLink>
          <li>UberEats</li>
        </NavLink>
        <NavLink onClick={toggleActive}>
          <div className="information">
            <li>Information</li>
            {isDropDownActive ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </div>
          {isDropDownActive && <NestedDropDown />}
        </NavLink>
        <NavLink>
          <li>Help</li>
        </NavLink>
      </ul>
      <NavLink className="language">
        <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
        PL-PL
      </NavLink>
    </div>
  );
}
