import React, { Component } from "react";

export class Paginate extends Component {
  render() {
    const {
      nextApps,
      previousApps,
      handleClick,
      numOfApps,
      activePage
    } = this.props;

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(numOfApps / 3); i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <ul className="pagination">
          <li key="less" onClick={previousApps}>
            <a href="!#">&lt;</a>
          </li>

          {pageNumbers.map(number => {
            return (
              <li
                key={number}
                className={activePage === number ? "active" : null}
                onClick={() => handleClick(number)}
              >
                <a href="!#">{number}</a>
              </li>
            );
          })}

          <li key="more" onClick={nextApps}>
            <a href="!#">&gt;</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Paginate;
