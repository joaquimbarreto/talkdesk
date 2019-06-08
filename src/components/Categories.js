import React, { Component } from "react";

export class Categories extends Component {
  render() {
    return (
      <li class="active">
        <a onClick={() => this.props.setCategory(this.props.category)}>
          {this.props.category}
        </a>
      </li>
    );
  }
}

export default Categories;
