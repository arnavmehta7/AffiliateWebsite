const Login = () => {

    return (

        <div>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="title">
                                Login
                            </h4>
                            <ul className="breadcrumb-list">
                                <li>
                                    <a href="index.html">
                                        <i className="fa fa-home"></i>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <span><i className="fa fa-chevron-right"></i> </span>
                                </li>
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="auth">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="sign-form">
                                <div className="heading">
                                    <h4 className="title">
                                        Login
                                    </h4>
                                    <p className="subtitle">
                                        Sign in to your account to continue.
                                    </p>
                                </div>
                                <form className="form-group mb-0" action="#">
                                    <input className="form-control " type="text" name="yourname" placeholder="User Name"/>
                                        <input className="form-control" type="password" name="password" placeholder="Password"/>
                                            <div className="custom-control custom-checkbox  d-flex">
                                                <input type="checkbox" className="custom-control-input" id="remember"/>
                                                    <label className="custom-control-label ml-2" for="remember">Remember Me</label>
                                                    <span className="ml-auto"><a href="forgot-pass.html">Forgot Password ?</a></span>
                                            </div>
                                            <button className="bigbtn" type="submit">Log In</button>
                                            <p className="reg-text text-center mb-0">Don't have an account? <a href="register.html">Register Now</a></p>
                                        </form>
                                    </div>

                            </div>
                    </div>
                    </div>

            </section>


        </div>
    )


}

export default Login;