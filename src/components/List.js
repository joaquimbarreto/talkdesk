import React, { Component } from "react";

export class List extends Component {
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
            <div class="app-item">
              <div class="box-info">
                <div class="box-info--content">
                  <div class="description">
                    <h1>Power Dialer</h1>
                    <p>
                      Auto dialer that will help increase your connect rates and
                      talk time.
                    </p>
                  </div>
                  <div class="tags">
                    <span>Dialer</span>
                  </div>
                </div>
                <div class="box-info--footer">
                  <ul>
                    <li>
                      <span>Trial</span>{" "}
                      <h3>
                        Free
                        <sup />
                      </h3>
                    </li>
                    <li>
                      <span>Professional</span>{" "}
                      <h3>
                        45.00<sup>€</sup>
                      </h3>
                    </li>
                    <li>
                      <span>Premium</span>{" "}
                      <h3>
                        60.00<sup>€</sup>
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="app-item">
              <div class="box-info">
                <div class="box-info--content">
                  <div class="description">
                    <h1>Power Dialer</h1>
                    <p>
                      Auto dialer that will help increase your connect rates and
                      talk time.
                    </p>
                  </div>
                  <div class="tags">
                    <span>Dialer</span>
                  </div>
                </div>
                <div class="box-info--footer">
                  <ul>
                    <li>
                      <span>Trial</span>{" "}
                      <h3>
                        Free
                        <sup />
                      </h3>
                    </li>
                    <li>
                      <span>Professional</span>{" "}
                      <h3>
                        45.00<sup>€</sup>
                      </h3>
                    </li>
                    <li>
                      <span>Premium</span>{" "}
                      <h3>
                        60.00<sup>€</sup>
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="app-item">
              <div class="box-info">
                <div class="box-info--content">
                  <div class="description">
                    <h1>Smart Text</h1>
                    <p>Use SMS to help you communicate with your customers.</p>
                  </div>
                  <div class="tags">
                    <span>Channels</span>
                  </div>
                </div>
                <div class="box-info--footer">
                  <ul>
                    <li>
                      <span>Trial</span>{" "}
                      <h3>
                        Free
                        <sup />
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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

export default List;
