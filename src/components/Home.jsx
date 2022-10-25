import w4 from "../assets/images/w4.png";
import w5 from "../assets/images/w5.png";
import w1 from "../assets/images/w1.png";
import w2 from "../assets/images/w2.png";
import logoColor from "../assets/images/logo-color.png";
import w3 from "../assets/images/w3.png";
import Courses from "./courses";
import { Link } from "react-router-dom";
const Home = () => {

    return(
<>
<div id="home" className="hero-area">
        <div className="curve curve-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-self-center">
              <div className="left-content">
                <div className="content">
                  <h1 className="title">
                    WELCOME TO SURUMONEY INDIA'S NEW HIGH COMMISSION BASED PLATFORM </h1>

                  <p className="subtitle">
                    Effects present letters inquiry no an removed or friends. Desire behind
                    latter me though in. Supposing
                    shameless am engrossed itatibus additions.
                  </p>
                  <div className="links">
                    <Link to="#" className="mybtn1"><span>Get Started Today</span> </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-first order-lg-last">
              <div className="right-img">
                <div className="discount-circle">
                  <div className="discount-circle-inner">
                    <div className="price">
                      Join
                      <span>Today</span>
                    </div>
                  </div>
                </div>
                <img className="img-fluid img" src={w4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>




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
      <Courses w1={w1} w3={w3} w2={w2}/>
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
      </>
    )
}

export default Home;