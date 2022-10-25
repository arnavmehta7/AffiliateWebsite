import 'font-awesome/css/font-awesome.min.css';

const Courses = ({w3,w2,w1}) =>{

    return(
        <div>
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
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <h4 className="name">Starter Pack</h4>
                            <p className="description">
                              Hurry up buy now and join us!!!
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
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <h4 className="name">Advance Pack</h4>
                            <p className="description">
                              Hurry up buy now and join us!!!
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
                            <img src={w2} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="right-area">
                            <ul className="stars">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <h4 className="name">Expert Pack</h4>
                            <p className="description">
                              Hurry up buy now and join us!!!
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


        </div>
    )
}

export default Courses;