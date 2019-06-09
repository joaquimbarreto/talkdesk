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
        this.setState({
          apps: data,
          category: "Channels",
          categories: uniqCategories
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

  sortCategories = () => {
    const cats = this.state.categories;
    return cats.sort();
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
        if (app.categories.includes(currentCategory)) chosenApps.push(app);
      }
    });
    return chosenApps;
  };

  numAppsInChosenApps = () => {
    const numOfApps = this.filterApps();
    return numOfApps.length;
  };

  showApps = () => {
    return this.filterApps().slice(
      this.state.indexOfFirstApp,
      this.state.indexOfLastApp
    );
  };

  nextApps = () => {
    const numOfApps2 = this.numAppsInChosenApps();
    if (numOfApps2 / 3 < this.state.indexOfLastApp) {
      return null;
    }
    this.setState({
      activePage: this.state.activePage - 1,
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
    return (
      <div className="flex-container">
        <Nav
          setCategory={this.setCategory}
          categories={this.sortCategories()}
          currentCategory={this.state.category}
        />
        <AppList
          apps={this.showApps()}
          numOfApps={this.numAppsInChosenApps()}
          nextApps={this.nextApps}
          previousApps={this.previousApps}
          handleClick={this.handlePaginateClick}
          handleChange={this.handleChange}
          activePage={this.state.activePage}
        />
      </div>
    );
  }
}

export default App;
