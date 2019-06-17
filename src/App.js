import React, { useState, useEffect } from "react";
// import Nav from "./components/Nav";
import NavHooks from "./components/NavHooks";
import AppList from "./containers/AppList.js";
import "./styles.css";

const API = "http://localhost:3001/apps";

const App = props => {
  // state = {
  //   apps: [],
  //   indexOfFirstApp: 0,
  //   indexOfLastApp: 3,
  //   category: "",
  //   searchTerm: "",
  //   activePage: 1
  // };

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

  // componentDidMount = () => {
  //   this.fetchAPI()
  //     .then(data => {
  //       this.setState({
  //         apps: data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

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
    const allApps = apps.slice();
    const searchedTerm = searchTerm;
    const currentCategory = category;
    const chosenApps = [];

    allApps.forEach(app => {
      if (searchedTerm.length > 0) {
        if (app.name.toLowerCase().includes(searchedTerm.toLowerCase()))
          chosenApps.push(app);
      } else {
        if (
          app.categories.includes(currentCategory) ||
          currentCategory.length === 0
        )
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
    return sortChosenApps().slice(appIndex);
  };

  // const numAppsInChosenApps = () => {
  //   const numOfApps = this.filterApps();
  //   return numOfApps.length;
  // };

  // const nextApps = () => {
  //   const numOfApps2 = this.numAppsInChosenApps();
  //   if (numOfApps2 <= this.state.indexOfLastApp) {
  //     return null;
  //   }
  //   this.setState({
  //     activePage: this.state.activePage + 1,
  //     indexOfFirstApp: this.state.indexOfFirstApp + 3,
  //     indexOfLastApp: this.state.indexOfLastApp + 3
  //   });
  // };

  // const previousApps = () => {
  //   if (this.state.indexOfFirstApp === 0) {
  //     return null;
  //   }
  //   this.setState({
  //     activePage: this.state.activePage - 1,
  //     indexOfFirstApp: this.state.indexOfFirstApp - 3,
  //     indexOfLastApp: this.state.indexOfLastApp - 3
  //   });
  // };

  // const handlePaginateClick = page => {
  //   const newIndexOfLastApp = page * 3;
  //   const newIndexOfFirstApp = newIndexOfLastApp - 3;
  //   this.setState({
  //     activePage: page,
  //     indexOfFirstApp: newIndexOfFirstApp,
  //     indexOfLastApp: newIndexOfLastApp
  //   });
  // };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex-container">
      <NavHooks
        setCategory={categoryHandler}
        // categories={categories}
        currentCategory={category}
        resetCategory={resetCategory}
      />
      <AppList
        apps={showApps()}
        // numOfApps={numAppsInChosenApps()}
        // nextApps={nextApps}
        // previousApps={previousApps}
        // handleClick={handlePaginateClick}
        handleChange={handleChange}
        activePage={activePage}
      />
    </div>
  );
};

export default App;
