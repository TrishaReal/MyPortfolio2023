import React from "react";

const About = () => {
  return (
    <section className="lui-section lui-gradient-bottom" id="services-section">
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active">
              <span> About Me</span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active">
              <span>
                my <b></b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="v-line v-line-right">
        <div className="container">
          <div
            className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
            data-animate="active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Web Development </span>
                  </div>
                  <div className="icon"></div>
                  <h5 className="lui-title">
                    <span> Web Design &amp; Logo </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      Web designers craft the overall vision &amp; plan for a
                      website layout. Professional logo development: Business,
                      Company, or Personal.
                    </div>
                  </div>
                  {/* <a href="#pricing-section" className="lnk">
                    See Pricing
                  </a> */}
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Apps Development </span>
                  </div>
                  <div className="icon"></div>
                  <h5 className="lui-title">
                    <span> iOS &amp; Android </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Design Software applications to run on mobile devices.
                        Modern and mobile-ready application that will help you
                        reach all of your marketing.
                      </p>
                    </div>
                  </div>
                  <a href="#pricing-section" className="lnk">
                    See Pricing
                  </a>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
            </div>
            {/* <div className="swiper-pagination"></div> */}
          </div>

          <div className="lui-bgtitle">
            <span> About Me </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
