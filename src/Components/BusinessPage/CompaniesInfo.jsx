import "./CompaniesInfo.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function CompaniesInfo() {
  const [isHovered, setIsHovered] = useState([
    { id: 0, isHovered: false },
    { id: 1, isHovered: false },
    { id: 2, isHovered: false },
  ]);

  const handleHover = function (id) {
    setIsHovered((c) => {
      return c.map((el) => {
        if (el.id == id) {
          return { id: el.id, isHovered: !el.isHovered };
        }
        return el;
      });
    });
  };

  return (
    <section className="companiesInfo">
      <div className="companiesInfo-content container-lg">
        <h2 className="txt-lg">How companies use Uber for Business</h2>
        <div className="infoCard">
          <div
            className="card"
            onMouseEnter={() => {
              handleHover(0);
            }}
            onMouseLeave={() => {
              handleHover(0);
            }}
          >
            <img
              className={isHovered[0].isHovered && "hovered"}
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_360,h_203/v1679435963/assets/a6/c383fd-e0a2-4534-9651-40aa6f143f93/original/ilo-business_travel-360x204-expandable.svg"
              alt=""
            />
            <h3 className="txt-md">Buiness trips</h3>
          </div>
          <div
            className="card"
            onMouseEnter={() => {
              handleHover(1);
            }}
            onMouseLeave={() => {
              handleHover(1);
            }}
          >
            <img
              className={isHovered[1].isHovered && "hovered"}
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_360,h_203/v1679436006/assets/bd/b27aa4-3019-479f-9b41-c9bbc5187d33/original/ilo-courtesy_rides-360x204-expandable.svg"
              alt=""
            />
            <h3 className="txt-md">Occasional trips</h3>
          </div>
          <div
            className="card"
            onMouseEnter={() => {
              handleHover(2);
            }}
            onMouseLeave={() => {
              handleHover(2);
            }}
          >
            <img
              className={isHovered[2].isHovered && "hovered"}
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_360,h_203/v1679436116/assets/d9/ca79d1-d191-442b-8a19-df7cc125a59c/original/ilo-meal_programs-360x204-expandable.svg"
              alt=""
            />
            <h3 className="txt-md">Meal programs</h3>
          </div>
        </div>
        <h2 className="txt-lg">Start cooperation without initial costs</h2>
        <div className="cost-sec-container">
          <div className="cost-sec">
            <div className="cost-section-progress before">
              <div className="first-div"></div>
              <div className="first-div"></div>
            </div>
            <div className="cost-sec-content">
              <div className="cost-section-image">
                <img
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_203/v1679422653/assets/e1/ed6649-3011-4181-9dad-a241960c7c61/original/ilo-content_connected-01-360x202_2x.png"
                  alt=""
                />
              </div>
              <div className="cost-section-progress after">
                <div className="first-div"></div>
                <div className="first-div"></div>
              </div>
              <div className="cost-section-text">
                <h3 className="txt-md">
                  Customize rules for ride and meal programs
                </h3>
                <p className="txt-sm">
                  Set your own travel and business expense rules, help you stick
                  to them, and gain full visibility into every ride and meal.
                  You can easily integrate this solution with top expense
                  accounting providers with no additional service fee.
                </p>
              </div>
            </div>
          </div>
          <div className="cost-sec">
            <div className="cost-section-progress before">
              <div className="first-div"></div>
              <div className="first-div"></div>
            </div>
            <div className="cost-sec-content">
              <div className="cost-section-image">
                <img
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_203/v1679422708/assets/60/1f07db-0751-4b92-9399-ae4f0417219d/original/ilo-content_connected-02-360x202_2x.png"
                  alt=""
                />
              </div>
              <div className="cost-section-progress after">
                <div className="first-div"></div>
                <div className="first-div"></div>
              </div>
              <div className="cost-section-text">
                <h3 className="txt-md">
                  Customize rules for ride and meal programs
                </h3>
                <p className="txt-sm">
                  Set your own travel and business expense rules, help you stick
                  to them, and gain full visibility into every ride and meal.
                  You can easily integrate this solution with top expense
                  accounting providers with no additional service fee.
                </p>
              </div>
            </div>
          </div>
          <div className="cost-sec">
            <div className="cost-section-progress before">
              <div className="first-div"></div>
            </div>
            <div className="cost-sec-content">
              <div className="cost-section-image">
                <img
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_203/v1679422783/assets/ed/5ab4b4-8d7b-41e7-92b2-1957bd1a79f4/original/ilo-content_connected-03-360x202_2x.png"
                  alt=""
                />
              </div>
              <div className="cost-section-progress after">
                <div className="first-div"></div>
              </div>
              <div className="cost-section-text">
                <h3 className="txt-md">
                  Customize rules for ride and meal programs
                </h3>
                <p className="txt-sm">
                  Set your own travel and business expense rules, help you stick
                  to them, and gain full visibility into every ride and meal.
                  You can easily integrate this solution with top expense
                  accounting providers with no additional service fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
