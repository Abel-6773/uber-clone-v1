import "./Hero.css";
import Input from "./Input";
import Btn from "../UI/Btn";

export default function Hero() {
  return (
    <section className="homepage-hero bg-dark">
      <div className="homepage-hero-content container-lg">
        <div className="homepage-hero-input">
          <h1 className="txt-xl">Go wherever you want with Uber.</h1>
          <p className="txt-sm">Order a ride, get in and go.</p>
          <Input />
          <Btn BtnTxt="See prices" BtnStyle="light" />
        </div>
        <div className="homepage-hero-img">
          <img src="\images\Ride-with-Uber.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
