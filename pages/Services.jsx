import React from "react";

const Services = () => {
  return (
    <section className="lui-section lui-gradient-bottom" id="services-section">
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> What I Do </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                my <b>Services</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="v-line v-line-right">
        <div className="container">
          <div
            className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
            data-animate="active"
          >
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
                  <a href="#pricing-section" className="lnk">
                    See Pricing
                  </a>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  ></div>
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
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  ></div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Game Development </span>
                  </div>
                  <div className="icon"></div>
                  <h5 className="lui-title">
                    <span> Unity &amp; Unreal Engine </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      Creating games &amp; describes the design, development and
                      release of a game. Developing unique mobile android and
                      ios games.
                    </div>
                  </div>
                  <a href="#pricing-section" className="lnk">
                    See Pricing
                  </a>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  ></div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Advertising </span>
                  </div>
                  <div className="icon"></div>
                  <h5 className="lui-title">
                    <span> Google Ads </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      Advertising services include: Google search result pages,
                      gmails, YouTube and other websites participated in Google
                      Ads program.
                    </div>
                  </div>
                  <a href="#pricing-section" className="lnk">
                    See Pricing
                  </a>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  ></div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Music Writing </span>
                  </div>
                  <div className="icon"></div>
                  <h5 className="lui-title">
                    <span> Sound Track </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Music copying, writing, creating, transcription and
                        composition services.
                      </p>
                    </div>
                  </div>
                  <a href="#pricing-section" className="lnk">
                    See Pricing
                  </a>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>

          <div className="lui-bgtitle">
            <span> Services </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
