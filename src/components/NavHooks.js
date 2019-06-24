import React, { useState, useEffect } from "react";
import "../styles.css";

const NavHooks = props => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    fetch("http://localhost:3001/apps")
      .then(response => response.json())
      .then(data => {
        const cats = data.map(app => app.categories);
        const allCategories = Array.prototype.concat.apply([], cats);
        const uniqCategories = allCategories.filter((item, index) => {
          return allCategories.indexOf(item) >= index;
        });
        const sortUniqCategories = uniqCategories.sort();
        setCategories(sortUniqCategories);
      });
  };

  useEffect(() => getCategories(), []);

  return (
    <nav className="nav-categories">
      <h2 onClick={props.resetCategory}>Categories</h2>
      <ul className="nav-menu">
        {categories.map(category => {
          return (
            <li
              key={category}
              className={props.currentCategory === category ? "active" : null}
            >
              <a href="!#" onClick={() => props.setCategory(category)}>
                {category}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavHooks;
