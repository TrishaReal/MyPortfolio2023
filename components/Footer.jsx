import React from "react";

const Footer = ({ socialLinks }) => {
  return (
    <div className="footer lui-gradient-top">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div
                className="social-links align-center  scrolla-element-anim-1 scroll-animate"
                data-animate="active">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    target="_blank"
                    rel="nofollow"
                    href={link.url}>
                    <i aria-hidden="true" className={`fab fa-${link.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate footer-text"
                data-animate="active">
                © 2023 Copyright. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
