import React, { Component } from "react";

export class Paginate extends Component {
  render() {
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.numOfApps / 3); i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <ul className="pagination">
          <li key="less" onClick={this.props.previousApps}>
            <a>&lt;</a>
          </li>

          {pageNumbers.map(number => {
            return (
              <li
                key={number}
                className="active"
                onClick={() => this.props.handleClick(number)}
              >
                <a>{number}</a>
              </li>
            );
          })}

          <li key="more" onClick={this.props.nextApps}>
            <a>&gt;</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Paginate;
