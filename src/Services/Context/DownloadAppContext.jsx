import { createContext, useState } from "react";

const DownloadAppContext = createContext();

export const DownloadAppProvider = ({ children }) => {
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
    <DownloadAppContext.Provider value={{ isHovered }}>
      {children}
    </DownloadAppContext.Provider>
  );
};

export default DownloadAppContext;
