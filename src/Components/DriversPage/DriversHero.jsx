import "./DriversHero.css";
import Btn from "../UI/Btn";
import BtnUnderline from "../UI/BtnUnderline";

export default function DriversHero() {
  return (
    <section className="driverspage-hero bg-dark">
      <div className="driverspage-hero-content container-lg">
        <div className="driverspage-hero-input">
          <h1 className="txt-xl">Opportunity is everywhere</h1>
          <p className="txt-sm">
            Make the most of your time on the road on the platform with the
            largest network of active riders.
          </p>
          <div className="buttons">
            <Btn BtnTxt="Sign up to drive" BtnStyle="light" />
            <BtnUnderline
              BtnTxt="Already have an account? Sign in"
              BtnStyle="light"
            />
          </div>
        </div>
        <div className="driverspage-hero-img">
          <img
            src="\images\ForDriversPageimgs\illustration-safety-01-1.png"
            alt="Image of a driver"
          />
        </div>
      </div>
    </section>
  );
}
