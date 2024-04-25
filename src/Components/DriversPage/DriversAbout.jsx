import "./DriversAbout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function DriversAbout() {
  return (
    <section className="drivers-about container-lg">
      <h2 className="txt-lg">Make money when you want</h2>
      <img
        src="\images\ForDriversPageimgs\D_Driver_Why-Drive-with-us_v02 (1).svg"
        alt=""
      />
      <div className="info-container">
        <div className="info">
          <FontAwesomeIcon
            icon={faCalendar}
            size="xl"
            className="fontawesome"
          />
          <h3 className="txt-sm-bld">Set your own schedule</h3>
          <p className="txt-sm">
            Youre the boss. You can drive with the Uber app day or night. Fit
            driving around your life, not the other way around.
          </p>
        </div>
        <div className="info">
          <FontAwesomeIcon
            icon={faMoneyBill}
            size="xl"
            className="fontawesome"
          />

          <h3 className="txt-sm-bld">Make money on your terms</h3>
          <p className="txt-sm">
            The more you drive, the more money you can make. When demand is
            higher than normal, you can make even more.
          </p>
        </div>
        <div className="info">
          <FontAwesomeIcon icon={faUser} size="xl" className="fontawesome" />

          <h3 className="txt-sm-bld">Let the app lead the way</h3>
          <p className="txt-sm">
            Just tap and go. You get turn-by-turn directions, suggestions to
            help you make more money, and 24/7 support.
          </p>
        </div>
      </div>
    </section>
  );
}
