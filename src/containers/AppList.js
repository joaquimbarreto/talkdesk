import React, { Component } from "react";
import AppDetails from "../components/AppDetails";

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
        <ul class="pagination">
          <li>
            <a href="#">&lt;</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li class="active">
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">&gt;</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default AppList;
