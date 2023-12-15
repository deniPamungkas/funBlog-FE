import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DarkContext = createContext();
const DarkModeContext = (props) => {
  const [dark, setDark] = useState(
    JSON.parse(window.sessionStorage.getItem("dark")) || false
  );
  const handleMode = () => {
    setDark((cur) => !cur);
  };
  window.sessionStorage.setItem("dark", dark);
  const changeMode = () => {
    const body = document.querySelector("body");
    if (dark) return body.classList.add("dark");
    return body.classList.remove("dark");
  };
  changeMode();
  return (
    <DarkContext.Provider value={{ handleMode, dark }}>
      {props.children}
    </DarkContext.Provider>
  );
};
DarkModeContext.propTypes = {
  children: PropTypes.any,
};

export default DarkModeContext;
