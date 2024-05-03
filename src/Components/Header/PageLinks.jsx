import "./PageLinks.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function PageLinks() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.parentElement.classList.contains("information-header") &&
        !event.target.parentElement.classList.contains("information-body")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="page-links ">
      <NavLink to="/">
        <p className="logo txt-logo">Uber</p>
      </NavLink>
      <ul>
        <NavLink to="DriversPage">
          <li>For drivers</li>
        </NavLink>
        <NavLink to="PassingPage">
          <li>Passing</li>
        </NavLink>
        <NavLink to="BusinessPage">
          <li>Business</li>
        </NavLink>
        <div className="information">
          <div onClick={toggleDropdown} className="information-header">
            <p>Information</p>
            {isOpen ? (
              <FontAwesomeIcon
                className="fonticon"
                icon={faAngleUp}
                size="xs"
              />
            ) : (
              <FontAwesomeIcon
                className="fonticon"
                icon={faAngleDown}
                size="xs"
              />
            )}
          </div>
          {isOpen && (
            <div className="information-body">
              <p>About us</p>
              <p>Our offerings</p>
              <p>How Uber works</p>
              <p>Impact</p>
              <p>Diversity, equity, and inclusion</p>
              <p>Sustainability</p>
              <p>Newsroom</p>
              <p>Investor relations</p>
              <p>Blog</p>
              <p>Careers</p>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
}
