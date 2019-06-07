import React from "react";
import Nav from "./components/Nav.js";
import List from "./components/List.js";
import "./styles.css";

function App() {
  return (
    <div className="flex-container">
      <Nav />
      <List />
    </div>
  );
}

export default App;
