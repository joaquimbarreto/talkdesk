import React, { Component } from "react";
import Categories from "./Categories";
import "../styles.css";

export class Nav extends Component {
  render() {
    return (
      <nav className="nav-categories">
        <h2>Categories</h2>
        <ul className="nav-menu">
          {this.props.categories.map(category => {
            return (
              <Categories
                category={category}
                setCategory={this.props.setCategory}
              />
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
