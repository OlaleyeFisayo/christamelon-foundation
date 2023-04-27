import { createContext, useState } from "react";

const myContent = createContext();

function ContextProvider({ children }) {
  const [popUp, setPopUp] = useState(false);
  const [toggle, setToggle] = useState(false);

  const showPopUp = () => {
    setPopUp(true);
  };

  const hidePopUp = () => {
    setPopUp(false);
  };

  const showNavBar = () => {
    setToggle(true);
  };

  const hideNavBar = () => {
    setToggle(false);
  };

  const store = { popUp, showPopUp, hidePopUp, toggle, showNavBar, hideNavBar };

  return <myContent.Provider value={store}>{children}</myContent.Provider>;
}

export { myContent, ContextProvider };
