import React, { Component } from "react";
import AppDetails from "../components/AppDetails";
import Paginate from "../components/Paginate";

class AppList extends Component {
  render() {
    return (
      <div>
        <section class="apps-list">
          <header>
            <input type="text" placeholder="Search by App" />
          </header>
        </section>
        <ul>
          <li>
            {this.props.apps.map(app => {
              return <AppDetails app={app} />;
            })}
          </li>
        </ul>
        <Paginate
          nextApps={this.props.nextApps}
          previousApps={this.props.previousApps}
        />
      </div>
    );
  }
}

export default AppList;
