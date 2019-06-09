import React, { Component } from "react";
import "../styles.css";

export class Nav extends Component {
  render() {
    return (
      <nav className="nav-categories">
        <h2>Categories</h2>
        <ul className="nav-menu">
          {this.props.categories.map(category => {
            return (
              <li
                key={category}
                className={
                  this.props.currentCategory === category ? "active" : null
                }
              >
                <a onClick={() => this.props.setCategory(category)}>
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
