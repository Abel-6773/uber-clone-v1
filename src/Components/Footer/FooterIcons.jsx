import "./FooterIcons.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function FooterIcons() {
  return (
    <div className="footer-icons" style={{ color: "white" }}>
      <div>
        <div className="icon-container">
          <div>
            <NavLink>
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faXTwitter} style={{ color: "#ffffff" }} />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff" }} />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff" }} />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#ffffff" }}
              />
            </NavLink>
          </div>
          <div className="localization txt-sm">
            <div>
              <FontAwesomeIcon
                className="localization-icon"
                icon={faGlobe}
                style={{ color: "#ffffff" }}
              />
              <p>English</p>
            </div>
            <div>
              <FontAwesomeIcon
                className="localization-icon"
                icon={faLocationDot}
                style={{ color: "#ffffff" }}
              />
              <p>Warsaw</p>
            </div>
          </div>
        </div>
        <div className="appstore-links">
          <NavLink className="playstore">
            <img src="\images\google-play-badge.png" alt="" />
          </NavLink>
          <NavLink className="applestore">
            <img
              src="\images\Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
              alt=""
            />
          </NavLink>
        </div>
      </div>
      <div className="terms-condition">
        <p className="txt-xs">&copy;2024 Uber Technologies Inc.</p>
        <div className="txt-xs">
          <NavLink>Privacy</NavLink>
          <NavLink>Accessibility for people with disabilities</NavLink>
          <NavLink>Terms of Use</NavLink>
        </div>
      </div>
    </div>
  );
}
