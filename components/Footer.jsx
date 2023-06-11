import React from "react";

const Footer = () => {
  return (
    <div className="footer lui-gradient-top">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div
                className="social-links align-center  scrolla-element-anim-1 scroll-animate"
                data-animate="active">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://github.com/TrishaReal">
                  <i aria-hidden="true" className="fab fa-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.linkedin.com/in/trishasairenereal/">
                  <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                </a>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.behance.net/trishasairenereal">
                  <i aria-hidden="true" className="fab fa-behance"></i>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate footer-text"
                data-animate="active">
                © 2023 <strong>Luique</strong>. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
