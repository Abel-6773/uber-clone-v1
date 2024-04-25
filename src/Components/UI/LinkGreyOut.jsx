import "./LinkGreyOut.css";
import { NavLink } from "react-router-dom";

export default function LinkGreyOut({ LinkTxt }) {
  return <NavLink className="link-grey txt-xs">{LinkTxt}</NavLink>;
}
