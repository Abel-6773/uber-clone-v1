import "./AboutUs.css";
import AboutInfo from "./AboutInfo";
import { useMediaQuery } from "react-responsive";

export default function AboutUs() {
  const isSmallScreen = useMediaQuery({ maxWidth: 1100 });
  return (
    <section className="about-us container-lg">
      <div className="info-container">
        {!isSmallScreen && (
          <div className="about-us-img ">
            <img src="\images\earner-illustra.jpg" alt="" />
          </div>
        )}
        <AboutInfo
          HeaderTxt="Make trips whenever you want and earn money whenever it's convenient for you"
          InfoTxt="Earn income whenever you want by driving or delivering (or both) You can use your own car or rent one through Uber"
          BtnTxt="Get started"
          BtnUderTxt="Already have an account? Log in"
          BtnStyle="dark"
        />
        {isSmallScreen && (
          <div className="about-us-img duplicate">
            <img src="\images\earner-illustra.jpg" alt="" />
          </div>
        )}
      </div>
      <div className="info-container">
        <AboutInfo
          HeaderTxt="The Uber platform you know, tailored to your business needs"
          InfoTxt="Uber for Business is a platform for managing rides, meals and local
        delivery on a global scale, designed for companies of all sizes."
          BtnTxt="Get started"
          BtnUderTxt="Check out our solutions"
          BtnStyle="dark"
        />
        <div className="about-us-img">
          <img src="\images\u4b-square.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
