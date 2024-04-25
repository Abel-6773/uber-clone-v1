import "./DriversNav.css";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import DropDownTogglerContext from "../../Services/Context/DropDownTogglerContext";

export default function DriversNav() {
  const { isDropDownActive } = useContext(DropDownTogglerContext);
  const { toggleActive } = useContext(DropDownTogglerContext);

  const isSmallScreen = useMediaQuery({ maxWidth: 1100 });
  return (
    <nav className="drivers-nav ">
      <div
        className={`drivers-nav-content ${isSmallScreen && "mb"} container-xl`}
      >
        <div onClick={toggleActive} className="drivers-logo">
          <p className="logo txt-logo">Drive </p>
          {isDropDownActive ? (
            <FontAwesomeIcon className="fonticon" icon={faAngleUp} size="xs" />
          ) : (
            <FontAwesomeIcon
              className="fonticon"
              icon={faAngleDown}
              size="xs"
            />
          )}
        </div>
        <div className={`drivers-links ${isDropDownActive && "active"} txt-xs`}>
          <ul className={isSmallScreen && "mb"}>
            <NavLink>
              <li>Overview</li>
            </NavLink>
            <NavLink>
              <li>Requirements</li>
            </NavLink>
            <NavLink>
              <li>Delivery driver</li>
            </NavLink>
            <NavLink>
              <li>Driving basics</li>
            </NavLink>
            <NavLink>
              <li>Earnings</li>
            </NavLink>
            <NavLink>
              <li>Vehicle solutions</li>
            </NavLink>
            <NavLink>
              <li>Saftey</li>
            </NavLink>
            <NavLink>
              <li>Uber Pro</li>
            </NavLink>
            <NavLink>
              <li>Contact us</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
