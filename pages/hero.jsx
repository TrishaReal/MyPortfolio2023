import Image from "next/image";
import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const cloudControls = useAnimation();

  const cloudAnimation = {
    y: [-10, 10],
    opacity: [1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  const startCloudAnimation = async () => {
    await cloudControls.start(cloudAnimation);
  };

  useEffect(() => {
    startCloudAnimation();
  }, []);

  return (
    <section
      className="lui-section lui-section-hero lui-gradient-top"
      id="started-section">
      <div className="container">
        <div className="lui-started v-line v-line-left">
          <div className="section hero-started">
            <div
              className="content scrolla-element-anim-1 scroll-animate"
              data-animate="active">
              <div className="titles">
                <div className="lui-subtitle">
                  <span>
                    Hello, <b>my name is</b>
                  </span>
                </div>
                <motion.h1
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: [-225, 0], opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="title splitting-text-anim-1 scroll-animate"
                  data-splitting="chars"
                  data-animate="active">
                  <span>
                    <b>Trisha</b> Real
                  </span>
                </motion.h1>

                <div className="label lui-subtitle">
                  I am
                  <strong>
                    <Typewriter
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      words={[
                        "Front-End Developer",
                        "React Developer",
                        "Graphic Designer",
                      ]}
                    />
                  </strong>
                </div>
              </div>
              <div className="description">
                <div>
                  <p>
                    A go-getter with a strong desire to try new things.
                    Friendly, reflective, always up for a challenge, and loves
                    learning. Expresses emotions through creativity, fueled by a
                    passion for art, computers, and technology.
                  </p>
                </div>
                <div className="social-links">
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
              <div className="bts">
                <a
                  target="_blank"
                  href="/assets/CV_TrishaS.Real.pdf"
                  download="CV_TrishaSReal.pdf"
                  className="btn">
                  <span>Download CV</span>
                </a>
                <a href="#skills-section" className="btn-lnk">
                  My Skills
                </a>
              </div>
            </div>
            <div className="slide scrolla-element-anim-1 scroll-animate">
              <Image
                width={500}
                height={500}
                decoding="async"
                src="/assets/images/profile01.png"
                alt="Trisha Sairene Real"
                priority={true}
              />
              <span className="circle circle-1"></span>
              <span
                className="circle img-1"
                style={{
                  backgroundImage: "url(assets/images/pat-1.png)",
                }}></span>
              <span
                className="circle img-2"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}></span>
              <span
                className="circle img-3"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}></span>

              <div className="info-list">
                <motion.ul
                  initial={{ x: 0, opacity: 0 }}
                  animate={cloudControls}>
                  <li>
                    <span className="num">1</span>
                    <span className="value">
                      Year of <strong>Experience</strong>
                    </span>
                  </li>
                  <li>
                    <span className="num num-custom">100%</span>
                    <span className="value">
                      Energy and <strong>Ambition</strong>
                    </span>
                  </li>
                </motion.ul>
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
