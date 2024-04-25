import "./DriversGetStarted.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faRectangleList } from "@fortawesome/free-solid-svg-icons";
import BtnUnderline from "../UI/BtnUnderline";

export default function DriversGetStarted() {
  return (
    <section className="drivers-get-started ">
      <div className="drivers-get-started-content container-lg">
        <h2 className="txt-lg">Get Started</h2>
        <ul className="progress-bar">
          <li>Hit the road</li>
          <li>Deliver with Uber Eats</li>
        </ul>
        <div className="info-container">
          <div className="info">
            <FontAwesomeIcon icon={faStar} size="xl" className="fontawesome" />
            <h3 className="txt-sm-bld">Sign up online</h3>
            <p className="txt-sm">
              Just tell us which city you'd like to drive. We'll email you with
              your next steps.
            </p>
            <BtnUnderline BtnTxt="Sign up online" BtnStyle="dark" />
          </div>
          <div className="info">
            <FontAwesomeIcon
              icon={faFileInvoice}
              size="xl"
              className="fontawesome"
            />
            <h3 className="txt-sm-bld">Check driving requirements</h3>
            <p className="txt-sm">
              Heres what you need to know if you want to start driving with
              Uber.
            </p>
            <BtnUnderline BtnTxt="Requirements" BtnStyle="dark" />
          </div>
          <div className="info">
            <FontAwesomeIcon
              icon={faRectangleList}
              size="xl"
              className="fontawesome"
            />
            <h3 className="txt-sm-bld">Get a vehicle</h3>
            <p className="txt-sm">
              You can sign up even if you don't have a car that meets the
              vehicle requirements in Poland right now.
            </p>
            <BtnUnderline BtnTxt="Vehicle requirements" BtnStyle="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
