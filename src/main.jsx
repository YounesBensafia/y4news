// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ScrollToTop from "react-scroll-to-top";
import "./index.css";
import { TbBackground } from "react-icons/tb";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        <ScrollToTop
          smooth
          style={{
            backgroundColor: "#3882F6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
