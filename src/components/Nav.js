import React, { Component } from "react";
import "../styles.css";

export class Nav extends Component {
  render() {
    const { categories, currentCategory, setCategory } = this.props;

    return (
      <nav className="nav-categories">
        <h2>Categories</h2>
        <ul className="nav-menu">
          {categories.map(category => {
            return (
              <li
                key={category}
                className={currentCategory === category ? "active" : null}
              >
                <a onClick={() => setCategory(category)}>{category}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
