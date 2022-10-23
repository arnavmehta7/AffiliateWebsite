import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import w3 from "./assets/images/w3.png";
import logoColor from "./assets/images/logo-color.png";
import w4 from "./assets/images/w4.png";
import w5 from "./assets/images/w5.png";
import w1 from "./assets/images/w1.png";
import w2 from "./assets/images/w1.png";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header w3={w3} logoColor={logoColor} w4={w4} />




      <section className="about" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title extra">
                <h2 className="title">Why SURUMONEY</h2>
                <p>
                  Prepared is me marianne pleasure likewise debating. Wonder an
                  unable except better stairs do ye admire. His secure called
                  esteem praise.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="box">
                <div className="inner-box">
                  <div className="icon">
                    <i className="flaticon-art"></i>
                  </div>
                  <h4 className="title">Valuable Courses</h4>
                  <p className="text">
                    Viewing hastily or written dearest elderly up weather.
                    direction so sweetness, Donec dearest justo eget felis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <div className="inner-box">
                  <div className="icon">
                    <i className="flaticon-apps"></i>
                  </div>
                  <h4 className="title">Upto 90% Commission</h4>
                  <p className="text">
                    Viewing hastily or written dearest elderly up weather.
                    direction so sweetness, Donec dearest justo eget felis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <div className="inner-box">
                  <div className="icon">
                    <i className="flaticon-address"></i>
                  </div>
                  <h4 className="title">2 Level Bonus Income</h4>
                  <p className="text">
                    Viewing hastily or written dearest elderly up weather.
                    direction so sweetness, Donec dearest justo eget felis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <div className="inner-box">
                  <div className="icon">
                    <i className="flaticon-address"></i>
                  </div>
                  <h4 className="title">Same Day Payout</h4>
                  <p className="text">
                    Viewing hastily or written dearest elderly up weather.
                    direction so sweetness, Donec dearest justo eget felis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dealofweek">
        <div className="curve curve-bottom"></div>
        <div className="curve curve-top"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title">
                <h2 className="title">SURUMONEY COURSES</h2>
                <p>
                  Prepared is me marianne pleasure likewise debating. Wonder an
                  unable except better stairs do ye admire. His secure called
                  esteem praise.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="deal-slider-area">
                <div className="deal-slider">
                  <div className="item">
                    <div className="content">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="left-area">
                            <img src={w1} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="right-area">
                            <ul className="stars">
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                            </ul>
                            <h4 className="name">Starter Pack</h4>
                            <p className="description">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Magnam illo reiciendis saepe molestias
                              veritatis!
                            </p>
                            <div className="price">
                              <p>
                                <span>$99</span>
                                <del>$250</del>
                              </p>
                            </div>
                            <div className="deal-counter">
                              <div data-countdown="2020/12/09"></div>
                            </div>
                            <div className="links">
                              <a href="#" className="mybtn1">
                                <span>Buy Now</span>{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="left-area">
                            <img src={w3} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="right-area">
                            <ul className="stars">
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                            </ul>
                            <h4 className="name">Advance Pack</h4>
                            <p className="description">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Magnam illo reiciendis saepe molestias
                              veritatis!
                            </p>
                            <div className="price">
                              <p>
                                <span>$99</span>
                                <del>$250</del>
                              </p>
                            </div>
                            <div className="deal-counter">
                              <div data-countdown="2020/12/09"></div>
                            </div>
                            <div className="links">
                              <a href="#" className="mybtn1">
                                <span>Buy Now</span>{" "}
                              </a>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="left-area">
                            <img src={w3} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="right-area">
                            <ul className="stars">
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                            </ul>
                            <h4 className="name">Expert Pack</h4>
                            <p className="description">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Magnam illo reiciendis saepe molestias
                              veritatis!
                            </p>
                            <div className="price">
                              <p>
                                <span>$99</span>
                                <del>$250</del>
                              </p>
                            </div>
                            <div className="deal-counter">
                              <div data-countdown="2020/12/09"></div>
                            </div>
                            <div className="links">
                              <a href="#" className="mybtn1">
                                <span>Buy Now</span>{" "}
                              </a>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="whaybest">
        <div className="curve curve-bottom"></div>
        <div className="curve curve-top"></div>
        <div className="container">
          <div className="row row-one">
            <div className="col-lg-6 d-flex">
              <div className="about-img">
                <img src={w5} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="info">
                <h2 className="info-title">
                  Why SURUMONEY
                </h2>
                <ul className="feature-list">
                  <li>
                    <div className="icon">
                      <i className="flaticon-alarm"></i>
                    </div>
                    <div className="content">
                      <h4>Alarm Counter</h4>
                      <p>
                        New had happen unable uneasy. Drawings pronounce can be
                        followed improved out.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-speech-bubble"></i>
                    </div>
                    <div className="content">
                      <h4>Live Chat</h4>
                      <p>
                        New had happen unable uneasy. Drawings pronounce can be
                        followed improved out.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-camera"></i>
                    </div>
                    <div className="content">
                      <h4>Camera</h4>
                      <p>
                        New had happen unable uneasy. Drawings pronounce can be
                        followed improved out.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-wifi"></i>
                    </div>
                    <div className="content">
                      <h4>Support Wifi</h4>
                      <p>
                        New had happen unable uneasy. Drawings pronounce can be
                        followed improved out.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-6">
              <div className="info">
                <div className="round-shape"></div>
                <h2 className="info-title">
                  A Watch Can Make Your Life Easy and Fast.
                </h2>
                <ul className="feature-list">
                  <li>
                    <div className="icon">
                      <i className="flaticon-alarm"></i>
                    </div>
                    <div className="content">
                      <h4>Alarm Counter</h4>
                      <p>
                        New had happen unable uneasy. Drawings pronounce can be
                        followed improved out.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-speech-bubble"></i>
                    </div>
                    <div className="content">
                      <h4>Live Chat</h4>
                      <p>
                        New had happen unable uneasy. Drawings pronounce can be
                        followed improved out.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-camera"></i>
                    </div>
                    <div className="content">
                      <h4>Camera</h4>
                      <p>
                        New had happen unable uneasy. Drawings pronounce can be
                        followed improved out.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-wifi"></i>
                    </div>
                    <div className="content">
                      <h4>Support Wifi</h4>
                      <p>
                        New had happen unable uneasy. Drawings pronounce can be
                        followed improved out.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex order-first order-lg-last">
              <div className="about-img">
                <img src={w1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
