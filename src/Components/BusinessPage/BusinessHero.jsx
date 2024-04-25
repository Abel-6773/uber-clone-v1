import "./BusinessHero.css";
import Btn from "../UI/Btn";
import BtnUnderline from "../UI/BtnUnderline";

export default function BusinessHero() {
  return (
    <section className="businesspage-hero bg-dark">
      <div className="businesspage-hero-content container-lg">
        <div className="businesspage-hero-input">
          <h1 className="txt-xl">
            The best features of the Uber platform for your business
          </h1>
          <p className="txt-sm">
            Uber for Business gives organizations greater control, deeper
            analytics, and features designed with business users in mind.
            Monitor and manage business travel, meal programs and more from one
            dashboard.
          </p>
          <div className="buttons">
            <Btn BtnTxt="First steps" BtnStyle="light" />
            <BtnUnderline BtnTxt="Check out our solutions" BtnStyle="light" />
          </div>
        </div>
        <div className="businesspage-hero-img">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_558/v1685006943/assets/07/61a159-ae6b-4821-bcb4-83aaf8c4bdf6/original/220428_UBER_CDMX_M-DT1-A_001035_VS_R2.jpg"
            alt="Image of a business woman"
          />
        </div>
      </div>
      <div className="platform-section container-lg">
        <h2 className="txt-lg">
          A global platform based on the world's largest mobility network
        </h2>
        <div className="benefits">
          <div className="benefit">
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_48,h_48/v1679420518/assets/f9/be74fb-fb61-4e4f-8757-91131e000869/original/badge-money-64x64.svg"
              alt=""
            />
            <h3 className="txt-sm-bld">
              Reduce costs by up to 10% by improving policy compliance
            </h3>
            <p className="txt-sm">
              Our customers have reported that they have been able to reduce
              ground transportation and meal costs¹. Control your spending and
              usage and get tools to enforce your policies.
            </p>
          </div>
          <div className="benefit">
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_48,h_48/v1679420624/assets/39/987ba2-fc85-4c9c-b901-75c3e9fc1852/original/badge-plant-64x64.svg"
              alt=""
            />
            <h3 className="txt-sm-bld">
              Reach your environmental goals with actionable analytics
            </h3>
            <p className="txt-sm">
              Track the CO₂ emissions of every ride on a dashboard exclusive to
              Uber for Business. With this data, you can take action and use
              eco-friendly travel options like Uber Green².
            </p>
          </div>

          <div className="benefit">
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_48,h_48/v1679421147/assets/d3/44b065-e97f-433d-95f7-6923c8bb3626/original/badge-star-64x64.svg"
              alt=""
            />
            <h3 className="txt-sm-bld">
              Provide your teams with a unique working atmosphere
            </h3>
            <p className="txt-sm">
              In addition to easy expense settlement and priority assistance, in
              selected cities employees have access to ride options that enable
              the team to travel comfortably, such as Uber Business Comfort.
            </p>
          </div>

          <div className="benefit">
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_48,h_48/v1679421252/assets/ea/736be5-8d4a-4f13-a108-614304d68153/original/badge-safety_report-64x64.svg"
              alt=""
            />
            <h3 className="txt-sm-bld">
              Choose the safety and security of your company
            </h3>
            <p className="txt-sm">
              We also offer collision notifications for business users. Our
              latest US safety report shows that 99.9% of Uber rides are
              completed without any safety incidents being reported.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
