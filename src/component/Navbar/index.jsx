// import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="container-fluid header position-relative overflow-hidden p-0">
      <nav className="navbar navbar-expand-lg fixed-top nav-light px-4 px-lg-5 py-4 py-lg-2">
        <a href=" " className="navbar-brand p-0">
          <h1 className="display-6 text-pink m-0 fw-bold ">
            <i className="fas fa-envelope me-3 "></i>Testtesan
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="index.html" className="nav-item nav-link">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="service.html" className="nav-item nav-link">
              Services
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="feature.html" className="dropdown-item">
                  Features
                </a>
                <a href="pricing.html" className="dropdown-item">
                  Pricing
                </a>
                <a href="blog.html" className="dropdown-item">
                  Blog
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
