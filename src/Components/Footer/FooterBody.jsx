import "./FooterBody.css";
import FooterLinks from "./FooterLinks";

export default function FooterBody() {
  return (
    <div className="footer-body" style={{ color: "white" }}>
      <FooterLinks
        LinksHeader="Business"
        LinkTxts={[
          "The nas",
          "Our offers",
          "The news",
          "Investors",
          "Blog",
          "Career",
          "AI",
          "Gift cards",
        ]}
      />
      <FooterLinks
        LinksHeader="Services"
        LinkTxts={[
          "Passing",
          "For drivers",
          "For suppliers",
          "Food",
          "Uber for Business",
          "Uber Frieght",
        ]}
      />
      <FooterLinks
        LinksHeader="Global citizenship"
        LinkTxts={["Security", "Diversity and inclusion"]}
      />
      <FooterLinks
        LinksHeader="Trip"
        LinkTxts={["Book now", "Airports", "Cities"]}
      />
    </div>
  );
}
