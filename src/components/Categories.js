import React, { Component } from "react";

export class Categories extends Component {
  render() {
    return (
      <li key={this.props.category} className="active">
        <a onClick={() => this.props.setCategory(this.props.category)}>
          {this.props.category}
        </a>
      </li>
    );
  }
}

export default Categories;
