import React, { Component } from "react";
import Nav from "./components/Nav";
import List from "./containers/AppList.js";
import "./styles.css";

const API = "http://localhost:3001/apps";

class App extends Component {
  state = {
    apps: [],
    app1: 0,
    app2: 3,
    category: ""
  };

  componentDidMount = () => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          apps: data,
          category: "Channels"
        });
      });
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
    return (
      <div className="flex-container">
        <Nav category={this.setCategory} />
        <List
          apps={this.showApps()}
          nextApps={this.nextApps}
          previousApps={this.previousApps}
        />
      </div>
    );
  }
}

export default App;
