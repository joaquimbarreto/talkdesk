import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div class="flex-container">
        <nav class="nav-categories">
          <h2>Categories</h2>

          <ul class="nav-menu">
            <li class="active">
              <a href="#">Channels</a>
            </li>
            <li>
              <a href="#">Dialer</a>
            </li>
            <li>
              <a href="#">Optimization</a>
            </li>
            <li>
              <a href="#">Reporting</a>
            </li>
            <li>
              <a href="#">Voice Analytics</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
