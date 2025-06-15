// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ScrollToTop from "react-scroll-to-top";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        <ScrollToTop
          smooth
          style={{
            backgroundColor: "#1447E6",
            width: "50px",
            height: "50px",
            border: "2px solid #fff",
            borderRadius: "35%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // optional
          }}
          component={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" // Adjusted viewBox for better centering
              fill="white"
              width="30"
              height="30"
            >
              <path d="M12 8l6 6H6z" /> {/* Clean upward triangle */}
            </svg>
          }
        />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
