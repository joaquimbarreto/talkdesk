import React, { Component } from "react";

export class AppDetails extends Component {
  render() {
    // debugger;
    const { app } = this.props;

    const appCategories = app.categories;
    const firstAppCategory = appCategories.shift();

    return (
      <div class="app-item">
        <div class="box-info">
          <div class="box-info--content">
            <div class="description">
              <h1>{app.name}</h1>
              <p>{app.description}</p>
            </div>
            <div class="tags">
              <span>{firstAppCategory}</span>
              <span>
                {appCategories.length > 0
                  ? appCategories.map(category => {
                      return ` / ${category}`;
                    })
                  : null}
              </span>
            </div>
          </div>
          <div class="box-info--footer">
            <ul>
              {app.subscriptions.map(subs => {
                return (
                  <li>
                    <span>{subs.name}</span>
                    <h3>
                      {(subs.price / 100).toFixed(2)}
                      <sup>€</sup>
                    </h3>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDetails;
