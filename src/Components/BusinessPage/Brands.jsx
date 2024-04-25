import "./Brands.css";
import Btn from "../UI/Btn";
export default function Brands() {
  return (
    <section className="brands ">
      <div className="brands-content container-lg">
        <h2 className="txt-lg center">
          Join over 170,000 companies that work with us, including over half of
          the Fortune 500 companies
        </h2>
        <div className="brands-logo">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_203/v1679423868/assets/10/662a2b-e822-41f3-82ea-bfe096f10038/original/logo-zoom-360x202_2x.png"
            alt="Zoom logo"
          />
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_203/v1679423930/assets/46/7467fc-e44a-4e62-a333-decae8656e9f/original/logo-cocacola-360x202_2x.png"
            alt="Coca-cola logo"
          />
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_203/v1679423970/assets/d9/76db1c-0f43-425e-bda8-a39d19abec32/original/logo-samsung-360x202_2x.png"
            alt="Samsung logo"
          />
        </div>
        <div className="video-container">
          <div className="text-section">
            <p className="txt-sm">
              “Salary and basic benefits don't stop there. You need to actively
              listen to what employees want and need. One of the first benefits
              we offered was making Uber credits available to employees so they
              could safely request rides - both professional and personal. We
              encourage employees to spend their funds however they want.”
            </p>
            <p className="txt-sm">
              Ryan Carter <span>, founder and CEO of Parachute Media</span>{" "}
            </p>
          </div>
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/38D4KRyvBQY"
            frameborder="0"
            allowfullscreen
          ></iframe>
          {/* <iframe src="https://www.youtube.com/embed?v=38D4KRyvBQY&t=2s" frameborder="0"></iframe> */}
        </div>
      </div>
      <div className="recommended center">
        <h2 className="txt-lg">
          Nine out of ten customers recommend Uber for Business³
        </h2>
        <Btn BtnTxt="First steps" BtnStyle="light" />
      </div>
    </section>
  );
}
