import { NavLink } from "react-router-dom";
import "./Header.css";
import PageLinks from "./PageLinks";
import NavButtons from "./NavButtons";
import HamMenu from "./HamMenu";
export default function Header() {
  return (
    <header className="bg-dark">
      <nav className="nav-bar container-xl txt-sm">
        <PageLinks />
        <NavButtons />
      </nav>
      <HamMenu />
      {/* {HamMenuActive && } */}
    </header>
  );
}
