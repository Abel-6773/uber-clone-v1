import LinkGreyOut from "../UI/LinkGreyOut";

export default function FooterLinks({ LinksHeader, LinkTxts }) {
  return (
    <div className="footer-links">
      <p className="txt-sm">{LinksHeader}</p>
      {LinkTxts.map(function (link) {
        return <LinkGreyOut LinkTxt={link} />;
      })}
    </div>
  );
}
