const Header = ({ w4, logoColor }) => {
  return (
    <div>


      <header className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-0">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index.html">
                  <img src={logoColor} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu"
                  aria-controls="mainmenu" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainmenu">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#feature">Login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pricing">Our Course</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="blog-grid.html"><i className="fas fa-chevron-right"></i> Blog 3 Grid</a>
                        <a className="dropdown-item" href="blog-sidebar.html"><i className="fas fa-chevron-right"></i>Blog With Sidebar</a>
                        <a className="dropdown-item" href="blog-details-with-sidebar.html"><i className="fas fa-chevron-right"></i>Blog Details With Sidebar</a>
                        <a className="dropdown-item" href="blog-details.html"><i className="fas fa-chevron-right"></i>Blog Details</a>
                        <a className="dropdown-item" href="login.html"><i className="fas fa-chevron-right"></i>Login</a>
                        <a className="dropdown-item" href="register.html"><i className="fas fa-chevron-right"></i>Register</a>
                        <a className="dropdown-item" href="forgot-pass.html"><i className="fas fa-chevron-right"></i>Forgot Password</a>
                        <a className="dropdown-item" href="404.html"><i className="fas fa-chevron-right"></i>404</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#testimonial-area">Tstimonial</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#faq">Faq</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

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
                    <a href="#" className="mybtn1"><span>Get Started Today</span> </a>
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







    </div>
  )
}

export default Header;