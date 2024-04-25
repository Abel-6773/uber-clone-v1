import "./NestedDropDown.css";
import { NavLink } from "react-router-dom";

export default function NestedDropDown() {
  return (
    <div className="nested-drop-down">
      <ul className="txt-sm">
        <NavLink>
          <li>About us</li>
        </NavLink>
        <NavLink>
          <li>Our offers</li>
        </NavLink>
        <NavLink>
          <li>How Uber services work</li>
        </NavLink>
        <NavLink>
          <li>Influence</li>
        </NavLink>
        <NavLink>
          <li>Diversity, equality and inclusion</li>
        </NavLink>
        <NavLink>
          <li>The news</li>
        </NavLink>
        <NavLink>
          <li>Investor relation</li>
        </NavLink>
        <NavLink>
          <li>Blog</li>
        </NavLink>
        <NavLink>
          <li>Career</li>
        </NavLink>
      </ul>
    </div>
  );
}
