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
    currentPage: 1,
    appsPerPage: 3
  };

  componentDidMount = () => {
    fetch(API)
      .then(response => response.json())
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
      });
  };

  setCategory = category => {
    this.setState({ category });
  };

  sortCategories = () => {
    const cats = this.state.categories;
    return cats.sort();
  };

  filterApps = () => {
    return this.state.apps.filter(app =>
      app.categories.includes(this.state.category)
    );
  };

  showApps = () => {
    return this.filterApps().slice(
      this.state.indexOfFirstApp,
      this.state.indexOfLastApp
    );
  };

  nextApps = () => {
    this.setState({
      indexOfFirstApp: this.state.indexOfFirstApp + 3,
      indexOfLastApp: this.state.indexOfLastApp + 3
    });
  };

  previousApps = () => {
    this.setState({
      indexOfFirstApp: this.state.indexOfFirstApp - 3,
      indexOfLastApp: this.state.indexOfLastApp - 3
    });
  };

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
    this.setNewIndex();
  };

  setNewIndex = () => {
    const newIndexOfLastApp = this.state.currentPage * this.state.appsPerPage;
    const newIndexOfFirstApp = newIndexOfLastApp - this.state.appsPerPage;
    this.setState({
      indexOfFirstApp: newIndexOfFirstApp,
      indexOfLastApp: newIndexOfLastApp
    });
  };

  render() {
    return (
      <div className="flex-container">
        <Nav
          setCategory={this.setCategory}
          categories={this.sortCategories()}
        />
        <AppList
          apps={this.showApps()}
          nextApps={this.nextApps}
          previousApps={this.previousApps}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
