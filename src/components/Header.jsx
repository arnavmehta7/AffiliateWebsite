import { Link } from "react-router-dom";

const Header = ({ w4, logoColor }) => {
  return (
    <div>


      <header className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-0">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                  <img src={logoColor} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu"
                  aria-controls="mainmenu" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainmenu">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="#home">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#pricing">Our Course</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                      </Link>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="blog-grid.html"><i className="fas fa-chevron-right"></i> Blog 3 Grid</Link>
                        <Link className="dropdown-item" to="blog-sidebar.html"><i className="fas fa-chevron-right"></i>Blog With Sidebar</Link>
                        <Link className="dropdown-item" to="blog-details-with-sidebar.html"><i className="fas fa-chevron-right"></i>Blog Details With Sidebar</Link>
                        <Link className="dropdown-item" to="blog-details.html"><i className="fas fa-chevron-right"></i>Blog Details</Link>
                        <Link className="dropdown-item" to="login"><i className="fas fa-chevron-right"></i>Login</Link>
                        <Link className="dropdown-item" to="register.html"><i className="fas fa-chevron-right"></i>Register</Link>
                        <Link className="dropdown-item" to="forgot-pass.html"><i className="fas fa-chevron-right"></i>Forgot Password</Link>
                        <Link className="dropdown-item" to="404.html"><i className="fas fa-chevron-right"></i>404</Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#testimonial-area">Tstimonial</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#faq">Faq</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      
    </div>
  )
}

export default Header;