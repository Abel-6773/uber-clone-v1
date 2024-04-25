import "./AboutInfo.css";
import Btn from "../UI/Btn";
import BtnUnderline from "../UI/BtnUnderline";
export default function AboutInfo({
  HeaderTxt,
  InfoTxt,
  BtnTxt,
  BtnUderTxt,
  BtnStyle,
}) {
  return (
    <div className="about-info">
      <h2 className="txt-lg">{HeaderTxt}</h2>
      <p className="txt-sm">{InfoTxt}</p>
      <div className="about-buttons">
        <Btn BtnTxt={BtnTxt} BtnStyle={BtnStyle} />
        <BtnUnderline BtnTxt={BtnUderTxt} BtnStyle={BtnStyle} />
      </div>
    </div>
  );
}
