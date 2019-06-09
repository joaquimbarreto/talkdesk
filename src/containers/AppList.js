import React, { Component } from "react";
import AppDetails from "../components/AppDetails";
import Paginate from "../components/Paginate";

export class AppList extends Component {
  render() {
    const {
      apps,
      numOfApps,
      nextApps,
      previousApps,
      handleClick,
      handleChange,
      activePage
    } = this.props;

    return (
      <div>
        <section className="apps-list">
          <header>
            <input
              type="text"
              placeholder="Search by App"
              onChange={handleChange}
            />
          </header>
        </section>
        <ul>
          {apps.map(app => {
            return (
              <li key={app.id}>
                <AppDetails app={app} />
              </li>
            );
          })}
        </ul>
        <Paginate
          nextApps={nextApps}
          previousApps={previousApps}
          handleClick={handleClick}
          numOfApps={numOfApps}
          activePage={activePage}
        />
      </div>
    );
  }
}

export default AppList;
