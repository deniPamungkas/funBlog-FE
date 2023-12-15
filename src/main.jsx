import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import DarkModeContext from "./context/darkModeContext.jsx";
import AuthContextComp from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContext>
      <AuthContextComp>
        <App />
      </AuthContextComp>
    </DarkModeContext>
  </React.StrictMode>
);
