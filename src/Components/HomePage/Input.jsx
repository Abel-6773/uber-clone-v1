import "./Input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
export default function Input() {
  return (
    <div className="hero-input">
      <form className=" txt-sm">
        <div className="from">
          <input type="text" placeholder="Enter your location" />
          <div className="from-dot"></div>
          <div className="link-line"></div>
          <FontAwesomeIcon
            icon={faLocationArrow}
            className="location-icon"
            size="lg"
          />
        </div>
        <div className="to">
          <input type="text" placeholder="Enter your destination" />
          <div className="to-dot"></div>
        </div>
      </form>
    </div>
  );
}
