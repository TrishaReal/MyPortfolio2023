import React from "react";

const Footer = ({ socialLinks }) => {
  return (
    <div className="footer lui-gradient-top">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="download-cv text-center">
                <a
                  className="copyright-text downloadCv-footer"
                  target="_blank"
                  href="/assets/CV_TrishaS.Real.pdf"
                  download="CV_TrishaSReal.pdf">
                  <span>Download CV</span>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="social-links text-center">
                {socialLinks?.map((link, index) => (
                  <a
                    key={index}
                    className="socialFooter px-2"
                    target="_blank"
                    rel="nofollow"
                    href={link?.url}
                    social-name={link?.name}
                  >
                    <i aria-hidden="true" className={`fab fa-${link?.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="copyright-text text-center footer-text">
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
