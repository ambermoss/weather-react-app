import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Amber Moss
          <br></br>
          <a href="https://github.com/ambermoss/weather-react-app">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
