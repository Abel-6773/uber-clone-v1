import { createContext, useState } from "react";

const HamMenuContext = createContext();

export const HamMenuProvider = ({ children }) => {
  const [HamMenuActive, setHamMenuActive] = useState(false);
  const toggler = function () {
    setHamMenuActive((c) => {
      return !c;
    });
  };

  return (
    <HamMenuContext.Provider value={{ HamMenuActive, toggler }}>
      {children}
    </HamMenuContext.Provider>
  );
};

export default HamMenuContext;
