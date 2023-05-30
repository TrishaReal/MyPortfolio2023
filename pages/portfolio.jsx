import React from "react";

const Portfolio = () => {
  return (
    <section className="lui-section lui-gradient-top" id="works-section">
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Portfolio </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                my <b>Cases</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="v-line v-line-right">
        <div className="container">
          <div className="works-box">
            <div
              className="filter-links scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a
                href="#"
                className="lui-subtitle active"
                data-href=".works-col"
              >
                All
              </a>
              <a
                href="#"
                className="lui-subtitle"
                data-href=".sorting-ui-ux-design"
              >
                UI UX Design
              </a>
              <a href="#" className="lui-subtitle" data-href=".sorting-photo">
                Photography
              </a>
              <a
                href="#"
                className="lui-subtitle"
                data-href=".sorting-development"
              >
                Development
              </a>
              <a
                href="#"
                className="lui-subtitle"
                data-href=".sorting-branding"
              >
                Branding
              </a>
            </div>
            <div className="works-items works-masonry-items row">
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <div className="img">
                      <a href="work-single.html">
                        <img
                          decoding="async"
                          src="assets/images/work4.jpeg"
                          alt="Zorro"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category"> Branding, Photography </span>
                    <h5 className="name">
                      <a href="work-single.html">Zorro</a>
                    </h5>
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </div>
                    <a href="work-single.html" className="lnk">
                      See project
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  ></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <div className="img">
                      <a href="work-single.html">
                        <img
                          decoding="async"
                          src="assets/images/work2.jpeg"
                          alt="Gooir"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category"> Branding, UI UX Design </span>
                    <h5 className="name">
                      <a href="work-single.html">Gooir</a>
                    </h5>
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </div>
                    <a href="work-single.html" className="lnk">
                      See project
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  ></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <div className="img">
                      <a href="work-single.html">
                        <img
                          decoding="async"
                          src="assets/images/work7.jpg"
                          alt="Explore"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">Development, UI UX Design</span>
                    <h5 className="name">
                      <a href="work-single.html">Explore</a>
                    </h5>
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </div>
                    <a href="work-single.html" className="lnk">
                      See project
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  ></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <div className="img">
                      <a href="work-single.html">
                        <img
                          decoding="async"
                          src="assets/images/work1.jpeg"
                          alt="Mozar"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category"> Branding, Photography </span>
                    <h5 className="name">
                      <a href="work-single.html">Mozar</a>
                    </h5>
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </div>
                    <a href="work-single.html" className="lnk">
                      See project
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  ></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <div className="img">
                      <a href="work-single.html">
                        <img
                          decoding="async"
                          src="assets/images/single8.jpg"
                          alt="Stay Fit"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">Development, UI UX Design</span>
                    <h5 className="name">
                      <a href="work-single.html">Stay Fit</a>
                    </h5>
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </div>
                    <a href="work-single.html" className="lnk">
                      See project
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  ></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <div className="img">
                      <a href="work-single.html">
                        <img
                          decoding="async"
                          src="assets/images/single6.jpg"
                          alt="Kana"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category"> Development, Photography </span>
                    <h5 className="name">
                      <a href="work-single.html">Kana</a>
                    </h5>
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </div>
                    <a href="work-single.html" className="lnk">
                      See project
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="load-more-link">
              <a
                href="works.html"
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </div>
          </div>

          <div className="lui-bgtitle">
            <span> Portfolio </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
