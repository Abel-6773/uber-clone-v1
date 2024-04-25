import BtnUnderline from "../UI/BtnUnderline";
import "./Learnmore.css";
export default function Learnmore() {
  return (
    <section className="learnmore">
      <div className="learnmore-content container-lg">
        <h2 className="txt-lg">Want to learn more?</h2>
        <div className="card-sec">
          <div className="card">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_360/v1679425285/assets/a5/05e92b-1d22-45a0-b9d6-4242bb140ed2/original/img-resource-1-360x360_2x.png"
              alt=""
            />
            <p className="txt-sm">
              How to reduce the carbon footprint of business travel
            </p>
            <BtnUnderline BtnTxt="See how to do it" BtnStyle="dark" />
          </div>
          <div className="card">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_360/v1679425358/assets/c3/c578f7-9210-46e6-bdc2-cb38493225ba/original/img-resource-2-360x360_2x.png"
              alt=""
            />
            <p className="txt-sm">
              Perks and benefits your employees currently expect
            </p>
            <BtnUnderline BtnTxt="find out" BtnStyle="dark" />
          </div>
          <div className="card">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_360/v1679425447/assets/56/fa60d9-521d-4a8e-84b1-889587b4d8ca/original/img-resource-3-360x360_2x.png"
              alt=""
            />
            <p className="txt-sm">
              Path to sustainability: executive discussion of actions taken to
              achieve carbon neutrality
            </p>
            <BtnUnderline BtnTxt="read on" BtnStyle="dark" />
          </div>
        </div>
        <div className="text-area txt-sm">
          <p>
            Product and feature availability may vary by market and location.
            More information can be found here .
          </p>
          <p>
            {" "}
            <sup>1</sup> Based on a survey of over 275 Uber for Business
            customers worldwide in February 2023. Customers said they were able
            to reduce ground transportation and meal costs through improved
            policy compliance.
          </p>
          <p>
            <sup>2</sup> Uber Green is only available in selected cities.
            Initially, availability in areas outside the city center may be
            limited.
          </p>
          <p>
            <sup>3</sup> Based on a November 2021 study commissioned by Uber in
            which 323 Uber for Business customers answered the question "How
            likely are you to recommend Uber for Business to a colleague or
            someone in your network?"
          </p>
        </div>
      </div>
    </section>
  );
}
