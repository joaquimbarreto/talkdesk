import React from "react";

const MoreButton = props => {
  // debugger;
  return (
    <ul class="pagination">
      <li onClick={props.previousApps}>
        <a>&lt;</a>
      </li>
      <li>
        <a href="#">1</a>
      </li>
      <li class="active">
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li onClick={props.nextApps}>
        <a>&gt;</a>
      </li>
    </ul>
  );
};

export default MoreButton;
