import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Ellie Murphy and is{" "}
          <a
            href="https://github.com/ellievmurphy/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          by GitHub
        </footer>
      </div>
    </div>
  );
}
