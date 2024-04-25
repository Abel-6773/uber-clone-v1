import "./ToTopBtn.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ToTopBtn() {
  const [hovered, setHovered] = useState(false);

  const hoverToggler = function () {
    setHovered((c) => {
      return !c;
    });
  };

  return (
    <div
      onMouseEnter={hoverToggler}
      onMouseLeave={hoverToggler}
      className="to-top"
    >
      <NavLink className={!hovered ? "inactive text" : "text"}>
        Back to the begning
      </NavLink>
      <NavLink className="icon" to={"#"}>
        <FontAwesomeIcon icon={faArrowUp} />
      </NavLink>
    </div>
  );
}
