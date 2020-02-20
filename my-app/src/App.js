import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";

const styles = {
  width: "200px",
  height: "200px"
};

function App() {
  return (
    <div>
      <Main></Main>
      <img src={logo} style={styles} />

      <div className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
