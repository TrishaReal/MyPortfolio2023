import React from "react";

const Contact = () => {
  const handleClick = () => {
    document.getElementById("cform").submit();
  };

  return (
    <section className="lui-section lui-gradient-top" id="contact-section">
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Contact Me </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                Let's <b>Talk About Ideas</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="lui-contacts v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
              <div className="numbers-items">
                <div
                  className="numbers-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-map"></i>
                  </div>
                  <div className="title">
                    <span> Address </span>
                  </div>
                  <div className="lui-text">
                    <span> North Tower, Toronto, Canada </span>
                  </div>
                </div>
                <div
                  className="numbers-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-user"></i>
                  </div>
                  <div className="title">
                    <span> Freelance </span>
                  </div>
                  <div className="lui-text">
                    <span> Available Right Now </span>
                  </div>
                </div>
                <div
                  className="numbers-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-envelope"></i>
                  </div>
                  <div className="title">
                    <span> Email </span>
                  </div>
                  <div className="lui-text">
                    <span> zoe.miller@mydomain.com </span>
                  </div>
                </div>
                <div
                  className="numbers-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-address-book"></i>
                  </div>
                  <div className="title">
                    <span> Phone </span>
                  </div>
                  <div className="lui-text">
                    <span> +1 900 - 900 - 9000 </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
              <div
                className="contacts-form scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div
                  className="bg-img"
                  style={{ backgroundImage: "url(assets/images/pat-1.png)" }}
                ></div>
                <div className="contacts-form">
                  <form id="cform" method="post">
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="group">
                          <label>
                            Your Full Name <b>*</b>
                            <input type="text" name="name" />
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="group">
                          <label>
                            Your Email Address <b>*</b>
                            <input type="email" name="email" />
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="group">
                          <label>
                            Your Subject <b>*</b>
                            <input type="text" name="subject" />
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="group">
                          <label>
                            Your Message <b>*</b>
                            <textarea name="message"></textarea>
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                        <div className="terms-label">
                          * Accept the terms and conditions.
                        </div>
                        <a href="#" className="btn" onClick={handleClick}>
                          <span>Send Message</span>
                        </a>
                      </div>
                    </div>
                  </form>
                  <div className="alert-success" style={{ display: "none" }}>
                    <p>Thanks, your message is sent successfully.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lui-bgtitle">
            <span> Contact Me </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
