import "./Footer.css";
import FooterBody from "./FooterBody";
import FooterHeader from "./FooterHeader";
import FooterIcons from "./FooterIcons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content container-lg">
        <FooterHeader />
        <FooterBody />
        <FooterIcons />
      </div>
    </footer>
  );
}
