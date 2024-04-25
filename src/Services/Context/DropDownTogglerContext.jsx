import { createContext, useState } from "react";

const DropDownTogglerContext = createContext();

export const DropDownTogglerProvider = ({ children }) => {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const toggleActive = function () {
    setIsDropDownActive((c) => {
      return !c;
    });
  };

  return (
    <DropDownTogglerContext.Provider value={{ isDropDownActive, toggleActive }}>
      {children}
    </DropDownTogglerContext.Provider>
  );
};
export default DropDownTogglerContext;
