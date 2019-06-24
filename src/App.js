import React, { useState, useEffect } from "react";
import NavHooks from "./components/NavHooks";

import AppList from "./containers/AppList.js";
import "./styles.css";

const API = "http://localhost:3001/apps";

const App = () => {
  const [apps, setApps] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [category, setCategory] = useState("");
  const [appIndex, setAppIndex] = useState({
    indexOfFirstApp: 0,
    indexOfLastApp: 3
  });
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAPI = async () => {
    const response = await fetch(API);
    return await response.json();
  };

  useEffect(() => {
    fetchAPI().then(data => setApps(data));
  }, []);

  const categoryHandler = category => {
    setActivePage(1);
    setCategory(category);
    setAppIndex({
      indexOfFirstApp: 0,
      indexOfLastApp: 3
    });
  };

  const resetCategory = () => {
    setActivePage(1);
    setCategory("");
    setAppIndex({
      indexOfFirstApp: 0,
      indexOfLastApp: 3
    });
    setSearchTerm("");
  };

  const filterApps = () => {
    const chosenApps = [];
    apps.forEach(app => {
      if (searchTerm.length > 0) {
        if (app.name.toLowerCase().includes(searchTerm.toLowerCase()))
          chosenApps.push(app);
      } else {
        if (app.categories.includes(category) || category.length === 0)
          chosenApps.push(app);
      }
    });
    return chosenApps;
  };

  const sortChosenApps = () => {
    return filterApps().sort((a, b) => {
      var sumA = a.subscriptions.reduce((prev, next) => prev + next.price, 0);
      var sumB = b.subscriptions.reduce((prev, next) => prev + next.price, 0);
      if (sumA < sumB) {
        return -1;
      }
      if (sumA > sumB) {
        return 1;
      }
      return 0;
    });
  };

  const showApps = () => {
    return sortChosenApps().slice(
      appIndex.indexOfFirstApp,
      appIndex.indexOfLastApp
    );
  };

  const numAppsInChosenApps = () => {
    const numOfApps = filterApps();
    return numOfApps.length;
  };

  const nextApps = () => {
    const numOfApps2 = numAppsInChosenApps();
    if (numOfApps2 <= appIndex.indexOfLastApp) {
      return null;
    }
    setActivePage(activePage + 1);
    setAppIndex({
      indexOfFirstApp: appIndex.indexOfFirstApp + 3,
      indexOfLastApp: appIndex.indexOfLastApp + 3
    });
  };

  const previousApps = () => {
    if (appIndex.indexOfFirstApp === 0) {
      return null;
    }
    setActivePage(activePage - 1);
    setAppIndex({
      indexOfFirstApp: appIndex.indexOfFirstApp - 3,
      indexOfLastApp: appIndex.indexOfLastApp - 3
    });
  };

  const handlePaginateClick = page => {
    const newIndexOfLastApp = page * 3;
    const newIndexOfFirstApp = newIndexOfLastApp - 3;
    setActivePage(page);
    setAppIndex({
      indexOfFirstApp: newIndexOfFirstApp,
      indexOfLastApp: newIndexOfLastApp
    });
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex-container">
      <NavHooks
        setCategory={categoryHandler}
        currentCategory={category}
        resetCategory={resetCategory}
      />
      <AppList
        apps={showApps()}
        numOfApps={numAppsInChosenApps()}
        nextApps={nextApps}
        previousApps={previousApps}
        handleClick={handlePaginateClick}
        handleChange={handleChange}
        activePage={activePage}
      />
    </div>
  );
};

export default App;
