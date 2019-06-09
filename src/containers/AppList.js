import React, { Component } from "react";
import AppDetails from "../components/AppDetails";
import Paginate from "../components/Paginate";

export class AppList extends Component {
  render() {
    return (
      <div>
        <section className="apps-list">
          <header>
            <input
              type="text"
              placeholder="Search by App"
              onChange={this.props.handleChange}
            />
          </header>
        </section>
        <ul>
          {this.props.apps.map(app => {
            return (
              <li key={app.id}>
                <AppDetails app={app} />
              </li>
            );
          })}
        </ul>
        <Paginate
          apps={this.props.apps}
          nextApps={this.props.nextApps}
          previousApps={this.props.previousApps}
          handleClick={this.props.handleClick}
        />
      </div>
    );
  }
}

export default AppList;
