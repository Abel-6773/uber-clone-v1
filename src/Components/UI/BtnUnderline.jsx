import "./BtnUnderline.css";

export default function BtnUnderline({ BtnTxt, BtnStyle }) {
  return (
    <div className={`btn-underline ${BtnStyle}`}>
      <button className="txt-sm">{BtnTxt}</button>
    </div>
  );
}
