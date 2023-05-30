import React from "react";

const Hero = () => {
  return (
    <section
      className="lui-section lui-section-hero lui-gradient-top"
      id="started-section"
    >
      <div className="container">
        <div className="lui-started v-line v-line-left">
          <div className="section hero-started">
            <div
              className="content scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="titles">
                <div className="lui-subtitle">
                  <span>
                    Hello, <b>my name is</b>
                  </span>
                </div>
                <h1
                  className="title splitting-text-anim-1 scroll-animate"
                  data-splitting="chars"
                  data-animate="active"
                >
                  <span>
                    <b>Zoé</b> Miller
                  </span>
                </h1>
                <div className="label lui-subtitle">
                  I am <strong>Web Developer</strong>
                </div>
              </div>
              <div className="description">
                <div>
                  <p>
                    From France, Paris. I have rich experience in web design,
                    also I am good at wordpress. I love to talk with you about
                    our unique.
                  </p>
                </div>
                <div className="social-links">
                  <a target="_blank" rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-dribbble"></i>
                  </a>
                  <a target="_blank" rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
              <div className="bts">
                <a
                  target="_blank"
                  href="https://drive.google.com/"
                  className="btn"
                >
                  <span>Download CV</span>
                </a>
                <a href="#skills-section" className="btn-lnk">
                  My Skills
                </a>
              </div>
            </div>
            <div
              className="slide scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <img
                decoding="async"
                src="assets/images/profile2.png"
                alt="&lt;b&gt;Zoé&lt;/b&gt; Miller"
              />
              <span className="circle circle-1"></span>
              <span
                className="circle img-1"
                style={{ backgroundImage: "url(assets/images/pat-1.png)" }}
              ></span>
              <span
                className="circle img-2"
                style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
              ></span>
              <span
                className="circle img-3"
                style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
              ></span>

              <div className="info-list">
                <ul>
                  <li>
                    <span className="num">
                      12 <strong>+</strong>
                    </span>
                    <span className="value">
                      Years of <strong>Experience</strong>
                    </span>
                  </li>
                  <li>
                    <span className="num">330</span>
                    <span className="value">
                      Completed <strong>Projects</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> Web Developer </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
