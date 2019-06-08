import React, { Component } from "react";

export class Paginate extends Component {
  render() {
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.apps.length / 3); i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <ul class="pagination">
          <li onClick={this.props.previousApps}>
            <a>&lt;</a>
          </li>

          {pageNumbers.map(number => {
            return (
              <li class="active">
                <a onClick={() => this.props.handleClick}>{number}</a>
              </li>
            );
          })}

          <li onClick={this.props.nextApps}>
            <a>&gt;</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Paginate;
