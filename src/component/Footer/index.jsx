const Footer = () => {
  return (
    <div
      className="container-fluid footer py-3 wow fadeIn bg-black"
      data-wow-delay="0.2s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-light mb-4">Company</h4>
              <a href=""> Why Mailler?</a>
              <a href=""> Our Features</a>
              <a href=""> Our Portfolio</a>
              <a href=""> About Us</a>
              <a href=""> Our Blog & News</a>
              <a href=""> Get In Touch</a>
            </div>
          </div>
          <div className="col-md-3 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-light">Quick Links</h4>
              <a href=""> About Us</a>
              <a href=""> Contact Us</a>
              <a href=""> Privacy Policy</a>
              <a href=""> Terms & Conditions</a>
              <a href=""> Our Blog & News</a>
              <a href=""> Our Team</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-dark">Services</h4>
              <a href=""> All Services</a>
              <a href=""> Promotional Emails</a>
              <a href=""> Product Updates</a>
              <a href=""> Email Marketing</a>
              <a href=""> Acquistion Emails</a>
              <a href=""> Retention Emails</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-dark">Contact Info</h4>
              <a href="">
                <i className="fa fa-map-marker-alt me-2"></i> 123 Street, New
                York, USA
              </a>
              <a href="">
                <i className="fas fa-envelope me-2"></i> info@example.com
              </a>
              <a href="">
                <i className="fas fa-phone me-2"></i> +012 345 67890
              </a>
              <a href="" className="mb-3">
                <i className="fas fa-print me-2"></i> +012 345 67890
              </a>
              <div className="d-flex align-items-center">
                <i className="fas fa-share fa-2x text-secondary me-2"></i>
                <a
                  className="btn-square btn btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn-square btn btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn-square btn btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn-square btn btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
