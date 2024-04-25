import "./DriversApp.css";
import BtnUnderline from "../UI/BtnUnderline";
export default function DriversApp() {
  return (
    <section className="drivers-app ">
      <div className="drivers-app-content container-lg">
        <div>
          <h2 className="txt-lg">The Driver app</h2>
          <p className="txt-sm">
            Easy to use and reliable, the app was built for drivers, with
            drivers.
          </p>
          <BtnUnderline BtnTxt="Learn more" BtnStyle="dark" />
          <img src="\images\ForDriversPageimgs\mobileapp.png" alt="" />
        </div>
      </div>
    </section>
  );
}
