import "./DownloadApp.css";
import { useState } from "react";
import Application from "../HomePage/Application";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function DownloadAPP() {
  const [app, setApp] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1100 });
  const isHovered = function () {
    setApp({ ...app, hovered: !app.hovered });
  };
  return (
    <section className="download-app ">
      {/* <div className="download-app-content container-lg">
        <h2 className="txt-lg">Drive your way in the app</h2>
        <Application key={appInfo.id} a={appInfo} isHovered={isHovered} />
      </div> */}
      <div className="download-app-content container-lg">
        <h2 className="txt-lg">Drive your way in the app</h2>
        <div
          className="app-link"
          onMouseEnter={() => {
            isHovered();
          }}
          onMouseLeave={() => {
            isHovered();
          }}
        >
          {!isSmallScreen ? (
            <img src="\images\uberDriver.jpg" alt="" />
          ) : (
            <div className="uber-img">
              <p className=" txt-lg">Uber</p>
            </div>
          )}

          <div>
            <h3 className="txt-md">Download the Driver app</h3>
            {!isSmallScreen && <p className="txt-sm">Scan to download</p>}
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={app ? "arrow-icon-active" : "arrow-icon"}
          />
        </div>
      </div>
    </section>
  );
}
