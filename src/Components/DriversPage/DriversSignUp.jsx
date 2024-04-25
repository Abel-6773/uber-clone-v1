import "./DriversSignUp.css";
import BtnUnderline from "../UI/BtnUnderline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function DriversSignUp() {
  return (
    <section className="sign-up container-lg">
      <div className="sign-up-content">
        <h2 className="txt-lg">Sign up to drive</h2>
        <FontAwesomeIcon icon={faArrowRight} size="2xl" />
      </div>
      <p className="txt-sm">
        Certain requirements and features vary by country, region, and city.
      </p>
    </section>
  );
}
