import "./DriversFaq.css";
import BtnUnderline from "../UI/BtnUnderline";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function DriversFaq() {
  const faqSrc = [
    {
      q: "Can I drive with uber in my city?",
      ans: "Uber is is available in hundreds of cities worldwide. Tap below to see if yours is one of them.",
      btnTxt: "See all cities",
      isActive: false,
      id: 1,
    },
    {
      q: "What are the requirements to drive with Uber?",
      ans: "You must meet the minimum age to drive in your city, have a taxi license, and submit required documents, including a valid driver’s license.",
      btnTxt: "See driver requirements",
      isActive: false,
      id: 2,
    },
    {
      q: "Is uber safe?",
      ans: "Your safety matters to us. Uber has a Global Safety Team dedicated to doing our part to help prevent incidents. Learn more about the safety features in the app, as well as safeguards such as GPS tracking and phone anonymization, by visiting the link below.",
      btnTxt: "See Uber's commitment to safety",
      isActive: false,
      id: 3,
    },
    {
      q: "Do I need my own car?",
      ans: "If you want to drive with Uber but need a car, you can get a car from one of our vehicle partners or from a fleet partner in select markets. Please note that vehicle options may vary by city.",
      btnTxt: "Find a car",
      isActive: false,
      id: 4,
    },
  ];
  const [faq, setFaq] = useState(faqSrc);
  const faqToggler = function (num) {
    setFaq((c) => {
      return c.map((question) => {
        if (question.id == num) {
          return { ...question, isActive: !question.isActive };
        } else {
          return { ...question };
        }
      });
    });
  };

  return (
    <section className="drivers-faq container-lg">
      <h2 className="txt-lg ">Top questions from drivers</h2>
      <div className="faq-section">
        {faq.map((question) => {
          return (
            <div
              className="faq"
              onClick={() => {
                faqToggler(question.id);
              }}
            >
              <div className="faq-header">
                <p className="txt-sm-bld">{question.q}</p>
                {question.isActive ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </div>

              {question.isActive && (
                <div className="faq-body">
                  <p className="txt-sm">{question.ans}</p>{" "}
                  <BtnUnderline BtnStyle="dark" BtnTxt={question.btnTxt} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
