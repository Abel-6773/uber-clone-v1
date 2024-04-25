import LinkGreyOut from "../UI/LinkGreyOut";
import "./FooterHeader.css";
import { NavLink } from "react-router-dom";
export default function FooterHeader() {
  return (
    <div className="footer-header">
      <div>
        <h4 className="txt-logo">Uber</h4>
        <NavLink className="txt-sm">Visit the Help Center</NavLink>
      </div>
      <div>
        <LinkGreyOut LinkTxt="How the Uber and Uber Eats apps and websites work" />
      </div>
    </div>
  );
}
