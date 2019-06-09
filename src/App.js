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
    appsPerPage: 3,
    searchTerm: ""
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
    this.setState({ category });
  };

  sortCategories = () => {
    const cats = this.state.categories;
    return cats.sort();
  };

  filterApps = () => {
    const allApps = this.state.apps;
    const chosenApps = [];
    const currentCategory = this.state.category;
    allApps.forEach(app => {
      if (app.categories.includes(currentCategory)) chosenApps.push(app);
    });
    return chosenApps;
  };

  showApps = () => {
    return this.filterApps().slice(
      this.state.indexOfFirstApp,
      this.state.indexOfLastApp
    );
  };

  setNewIndex = () => {
    const newIndexOfLastApp = this.state.currentPage * this.state.appsPerPage;
    const newIndexOfFirstApp = newIndexOfLastApp - this.state.appsPerPage;
    this.setState({
      indexOfFirstApp: newIndexOfFirstApp,
      indexOfLastApp: newIndexOfLastApp
    });
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

  handlePaginateClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
    this.setNewIndex();
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    // debugger;
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
          handleClick={this.handlePaginateClick}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
