import React, { Component } from "react";
import "../styles.css";

class Nav extends Component {
  render() {
    return (
      <nav class="nav-categories">
        <h2>Categories</h2>
        <ul class="nav-menu">
          <li class="active">
            <a onClick={() => this.props.category("Channels")}>Channels</a>
          </li>
          <li>
            <a onClick={() => this.props.category("Dialer")}>Dialer</a>
          </li>
          <li>
            <a onClick={() => this.props.category("Optimization")}>
              Optimization
            </a>
          </li>
          <li>
            <a onClick={() => this.props.category("Reporting")}>Reporting</a>
          </li>
          <li>
            <a onClick={() => this.props.category("Voice Analytics")}>
              Voice Analytics
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
