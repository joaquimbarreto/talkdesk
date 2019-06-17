// master branch


import React, { Component } from "react";
import Nav from "./components/Nav";
import AppList from "./containers/AppList.js";
import "./styles.css";

const API = "http://localhost:3001/apps";

export class App extends Component {
  state = {
    apps: [],
    indexOfFirstApp: 0,
    indexOfLastApp: 3,
    category: "",
    categories: [],
    searchTerm: "",
    activePage: 1
  };

  fetchAPI = async () => {
    const response = await fetch(API);
    return await response.json();
  };

  componentDidMount = () => {
    this.fetchAPI()
      .then(data => {
        const cats = data.map(app => app.categories);
        const allCategories = Array.prototype.concat.apply([], cats);
        const uniqCategories = allCategories.filter((item, index) => {
          return allCategories.indexOf(item) >= index;
        });
        const sortUniqCategories = uniqCategories.sort();
        this.setState({
          apps: data,
          categories: sortUniqCategories
        });
      })
      .catch(err => console.log(err));
  };

  setCategory = category => {
    this.setState({
      category,
      indexOfFirstApp: 0,
      indexOfLastApp: 3,
      activePage: 1
    });
  };

  resetCategory = () => {
    this.setState({
      category: "",
      activePage: 1,
      indexOfFirstApp: 0,
      indexOfLastApp: 3,
      searchTerm: ""
    });
  };

  filterApps = () => {
    const allApps = this.state.apps.slice();
    const searchedTerm = this.state.searchTerm;
    const currentCategory = this.state.category;
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

  sortChosenApps = () => {
    return this.filterApps().sort((a, b) => {
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

  showApps = () => {
    return this.sortChosenApps().slice(
      this.state.indexOfFirstApp,
      this.state.indexOfLastApp
    );
  };

  numAppsInChosenApps = () => {
    const numOfApps = this.filterApps();
    return numOfApps.length;
  };

  nextApps = () => {
    const numOfApps2 = this.numAppsInChosenApps();
    if (numOfApps2 <= this.state.indexOfLastApp) {
      return null;
    }
    this.setState({
      activePage: this.state.activePage + 1,
      indexOfFirstApp: this.state.indexOfFirstApp + 3,
      indexOfLastApp: this.state.indexOfLastApp + 3
    });
  };

  previousApps = () => {
    if (this.state.indexOfFirstApp === 0) {
      return null;
    }
    this.setState({
      activePage: this.state.activePage - 1,
      indexOfFirstApp: this.state.indexOfFirstApp - 3,
      indexOfLastApp: this.state.indexOfLastApp - 3
    });
  };

  handlePaginateClick = page => {
    const newIndexOfLastApp = page * 3;
    const newIndexOfFirstApp = newIndexOfLastApp - 3;
    this.setState({
      activePage: page,
      indexOfFirstApp: newIndexOfFirstApp,
      indexOfLastApp: newIndexOfLastApp
    });
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    const { category, activePage, categories } = this.state;

    return (
      <div className="flex-container">
        <Nav
          setCategory={this.setCategory}
          categories={categories}
          currentCategory={category}
          resetCategory={this.resetCategory}
        />
        <AppList
          apps={this.showApps()}
          numOfApps={this.numAppsInChosenApps()}
          nextApps={this.nextApps}
          previousApps={this.previousApps}
          handleClick={this.handlePaginateClick}
          handleChange={this.handleChange}
          activePage={activePage}
        />
      </div>
    );
  }
}

export default App;
