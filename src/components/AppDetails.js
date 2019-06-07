import React, { Component } from "react";

class AppDetails extends Component {
  render() {
    return (
      <div class="app-item">
        <div class="box-info">
          <div class="box-info--content">
            <div class="description">
              <h1>{this.props.app.name}</h1>
              <p>{this.props.app.description}</p>
            </div>
            <div class="tags">
              <span>Voice Analytics</span> / <span>Reporting</span> /{" "}
              <span>Optimization</span>
            </div>
          </div>
          <div class="box-info--footer">
            <ul>
              <li>
                <span>Trial</span>
                <h3>
                  Free
                  <sup />
                </h3>
              </li>
              <li>
                <span>Professional</span>
                <h3>
                  35.00<sup>€</sup>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDetails;
