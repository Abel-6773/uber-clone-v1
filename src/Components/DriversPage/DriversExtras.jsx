import "./DriversExtras.css";
import BtnUnderline from "../UI/BtnUnderline";
export default function DriversExtras() {
  return (
    <section className="drivers-extras container-lg">
      <div className="info-container ">
        <div className="info">
          <img
            src="\images\ForDriversPageimgs\Driver-with-passenger-PL.jpg"
            alt=""
          />
          <h3 className="txt-md">Join a fleet</h3>
          <p className="txt-sm">
            Find and join a fleet partner and start driving for them using the
            Uber app.
          </p>
          <BtnUnderline BtnTxt="Join a fleet" BtnStyle="dark" />
        </div>
        <div className="info">
          <img src="\images\ForDriversPageimgs\UberDriver-PL.jpg" alt="" />
          <h3 className="txt-md">Become a fleet partner</h3>
          <p className="txt-sm">
            Start making money. Connect your drivers and upload the required
            documents to your profile.
          </p>
          <BtnUnderline BtnTxt="Become a fleet partner" BtnStyle="dark" />
        </div>
      </div>
      <h2 className="txt-lg">Driver extras</h2>
      <p className="txt-sm">What we do for you in Poland</p>
      <div className="additional-info-container">
        <div className="additional-info">
          <img
            src="\images\ForDriversPageimgs\Screenshot 2024-03-20 113931.png"
            alt=""
          />
          <h3 className="txt-sm-bld">Get support</h3>
          <p className="txt-sm">
            Let’s make every Uber trip hassle-free. Our support pages can help
            you set up your account, get started with the app, adjust fares, and
            much more.
          </p>
          <BtnUnderline BtnTxt="Get help" BtnStyle="dark" />
        </div>
        <div className="additional-info">
          <img
            src="\images\ForDriversPageimgs\Screenshot 2024-03-20 114015.png"
            alt=""
          />
          <h3 className="txt-sm-bld">Contact us</h3>
          <p className="txt-sm">
            Got questions? Get answers. Enjoy personal support at an Uber
            Greenlight Hub in Warsaw, Cracow, Poznań and Trójmiasto.
          </p>
          <BtnUnderline BtnTxt="Contact us" BtnStyle="dark" />
        </div>
        <div className="additional-info">
          <img
            src="\images\ForDriversPageimgs\Screenshot 2024-03-20 114055.png"
            alt=""
          />
          <h3 className="txt-sm-bld">Drive safely</h3>
          <p className="txt-sm">
            The Uber app is full of features that help you stay safe and
            confident before, during, and after every trip. And if you need
            help, Uber gives you 24/7 support.
          </p>
          <BtnUnderline BtnTxt="Read more about safety" BtnStyle="dark" />
        </div>
      </div>
    </section>
  );
}
