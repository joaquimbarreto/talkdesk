import React from "react";

const AppDetails = ({ app }) => {
  const appCategories = app.categories.slice();
  const firstAppCategory = appCategories.shift();

  return (
    <div className="app-item">
      <div className="box-info">
        <div className="box-info--content">
          <div className="description">
            <h1>{app.name}</h1>
            <p>{app.description}</p>
          </div>
          <div className="tags">
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
        <div className="box-info--footer">
          <ul>
            {app.subscriptions.map(subs => {
              return (
                <li key={subs.name}>
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
};

export default AppDetails;
