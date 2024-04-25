import "./Application.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

export default function Application({ a, isHovered }) {
  const isSmallScreen = useMediaQuery({ maxWidth: 1100 });
  return (
    <div
      className="app-link"
      onMouseEnter={() => {
        isHovered(a.id);
      }}
      onMouseLeave={() => {
        isHovered(a.id);
      }}
    >
      {!isSmallScreen ? (
        <img src={`${a.qrCode}`} alt="" />
      ) : (
        <div className="uber-img">
          <p className=" txt-lg">Uber</p>
        </div>
      )}

      <div>
        <h3 className="txt-md">{`${a.header}`}</h3>
        {!isSmallScreen && <p className="txt-sm">Scan to download</p>}
      </div>
      <FontAwesomeIcon
        icon={faArrowRight}
        className={a.hovered ? "arrow-icon-active" : "arrow-icon"}
      />
    </div>
  );
}
