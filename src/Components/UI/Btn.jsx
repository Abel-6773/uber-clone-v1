import "./Btn.css";

export default function Btn({ BtnTxt, BtnStyle }) {
  return (
    <div className={`btn ${BtnStyle}`}>
      <button className="txt-sm">{BtnTxt}</button>
      {console.log(BtnStyle)}
    </div>
  );
}
