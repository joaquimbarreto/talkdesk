import React, { Component } from "react";
import Nav from "./components/Nav";
import AppList from "./containers/AppList.js";
import "./styles.css";

const API = "http://localhost:3001/apps";

class App extends Component {
  state = {
    apps: [],
    app1: 0,
    app2: 3,
    category: "",
    categories: []
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
        // debugger;
      });
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
    return this.filterApps().slice(this.state.app1, this.state.app2);
  };

  nextApps = () => {
    this.setState({
      app1: this.state.app1 + 3,
      app2: this.state.app2 + 3
    });
  };

  previousApps = () => {
    this.setState({
      app1: this.state.app1 - 3,
      app2: this.state.app2 - 3
    });
  };

  setCategory = category => {
    this.setState({ category });
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
        />
      </div>
    );
  }
}

export default App;
