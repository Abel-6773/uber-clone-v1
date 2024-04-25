import "./AppSection.css";
import Application from "./Application";
import { useState } from "react";

export default function AppSection() {
  const appInfo = [
    {
      id: "ride",
      header: "Download the Uber app",
      qrCode: "/images/uberRide.jpg",
      hovered: false,
    },
    {
      id: "driver",
      header: "Download the Uber Driver app",
      qrCode: "/images/uberDriver.jpg",
      hovered: false,
    },
  ];

  const [app, setApp] = useState(appInfo);

  const isHovered = function (id) {
    setApp(
      app.map((a) => {
        if (a.id == id) {
          return { ...a, hovered: !a.hovered };
        } else {
          return a;
        }
      })
    );
  };

  return (
    <section className="appSection ">
      <div className="application-content container-lg">
        <h2 className="txt-lg">It will be easier with the application</h2>
        <div className="app-links">
          {app.map((a) => {
            return <Application key={a.id} a={a} isHovered={isHovered} />;
          })}
        </div>
      </div>
    </section>
  );
}
