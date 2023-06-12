import React from "react";
import { Slide, Flip } from "react-reveal";

const MySkills = () => {
  return (
    <section
      className="lui-section lui-gradient-bottom pt-5"
      id="skills-section">
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active">
              <span> Professional Skills</span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active">
              <span>
                my <b>Knowledge</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="v-line v-line-right">
        <div className="container pt-4 ">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 pb-5">
              <Flip right cascade>
                <div className="numbers-items">
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active">
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-calendar"></i>
                    </div>
                    <div className="title">
                      <span> Birth Date and Place </span>
                    </div>
                    <div className="lui-text">
                      <span> July 11, 1999 - Milan </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active">
                    <div className="icon">
                      <i aria-hidden="true" className="fa fa-globe"></i>
                    </div>
                    <div className="title">
                      <span> Nationality </span>
                    </div>
                    <div className="lui-text">
                      <span> Filipino </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active">
                    <div className="icon">
                      <i aria-hidden="true" className="fa fa-language"></i>
                    </div>
                    <div className="title">
                      <span> Languages </span>
                    </div>
                    <div className="lui-text">
                      <span> Italian, English, Tagalog, Spanish</span>
                    </div>
                  </div>
                </div>
              </Flip>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <Slide right cascade>
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active">
                    <h6 className="name">
                      <span> Html & Css</span>
                    </h6>

                    <div className="dots">
                      <div className="dot" style={{ width: "95%" }}>
                        <span></span>
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        95 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active">
                    <h6 className="name">
                      <span> JavaScript </span>
                    </h6>

                    <div className="dots">
                      <div className="dot" style={{ width: "85%" }}>
                        <span></span>
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        85 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active">
                    <h6 className="name">
                      <span> React Js </span>
                    </h6>

                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span></span>
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        90 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active">
                    <h6 className="name">
                      <span> Next.js</span>
                    </h6>

                    <div className="dots">
                      <div className="dot" style={{ width: "70%" }}>
                        <span></span>
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        70 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active">
                    <h6 className="name">
                      <span> API Calls</span>
                    </h6>

                    <div className="dots">
                      <div className="dot" style={{ width: "70%" }}>
                        <span></span>
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        70 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <Slide right cascade>
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active">
                    <h6 className="name">
                      <span> Git </span>
                    </h6>

                    <div className="dots">
                      <div className="dot" style={{ width: "85%" }}>
                        <span></span>
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        85 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active">
                    <h6 className="name">
                      <span> Bootstrap </span>
                    </h6>

                    <div className="dots">
                      <div className="dot" style={{ width: "80%" }}>
                        <span></span>
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        80 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active">
                    <h6 className="name">
                      <span> Photoshop </span>
                    </h6>

                    <div className="dots">
                      <div className="dot" style={{ width: "80%" }}>
                        <span></span>
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        80 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active">
                    <h6 className="name">
                      <span> Illustrator</span>
                    </h6>

                    <div className="dots">
                      <div className="dot" style={{ width: "70%" }}>
                        <span></span>
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        70 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>

          <div className="lui-bgtitle">
            <span> Skills </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
