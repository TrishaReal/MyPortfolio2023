import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Resume = () => {
  const [activeEducationItem, setActiveEducationItem] = useState(0);
  const [activeExperienceItem, setActiveExperienceItem] = useState(0);

  const toggleActiveEducationItem = (index) => {
    setActiveEducationItem((prevActiveItem) =>
      prevActiveItem === index ? null : index
    );
  };

  const toggleActiveExperienceItem = (index) => {
    setActiveExperienceItem((prevActiveItem) =>
      prevActiveItem === index ? null : index
    );
  };

  const educationData = [
    {
      title: "Internship Web Development",
      company: "Softfobia (An Indra Company)",
      date: "Oct.2022 - Mar.2023",
      description:
        "During a 6-month internship, I had the opportunity to revisit, enhance, and solidify my web programming skills, focusing primarily on the JavaScript language with the React Js library. Additionally, I gained experience in utilizing the M.E.R.N stack, which encompasses various JavaScript software tools.",
    },
    {
      title: "React Js and Redux",
      company: "Learning a frontend JS library",
      date: "2021",
      description:
        " UDEMY Course where I learned to create modern, performant, and responsive interfaces, the fundamental theory of the JSX language, creating reusable interface components, mastering the main React Hooks, gaining proficiency in using Redux, getting acquainted with the primary libraries used in the React ecosystemand last but not least creating custom hooks.",
    },
    {
      title: "Web Development",
      company: "Starting the f.e development fundamentals",
      date: "2020 - 2021",
      description: (
        <>
          Self-taught study in which I have focused on the main Front-End
          development languages such as: <br />
          - HTML5 <br />
          - CSS/CSS3/SASS: Media Queries, Flexbox, Grid, Animations <br />-
          JAVASCRIPT: JQuery, Ajax Calls
        </>
      ),
    },
    {
      title: "Graphic & Web Design",
      company: "Cagliari Art Academy",
      date: "2019 - 2020",
      description:
        "Course where I gained comprehensive knowledge in creating brands, brand identities, web and print graphics, digital editing, and compositions. The course covered various professional software widely used in the market, including Adobe Photoshop, Adobe Illustrator, Adobe InDesign, and more.",
    },
  ];

  const experienceData = [
    {
      title: "Jr React F.E Developer",
      company: "Minsait (An Indra Company)",
      date: "Jan.2024 - Present",
      description:
        "In early 2024, I kept on working with Minsait (an Indra company) after the management switch from Softfobia.",
    },
    {
      title: "Jr React F.E Developer",
      company: "Softfobia (An Indra Company)",
      date: "Mar.2023 - Dec.2023",
      description:
        "Following the internship at this company, I've had the opportunity to continue working with them, allowing me to further enhance my skills and continue working in the React JS team utilizing the M.E.R.N javascript stack for various projects. In the short time that I've been working here, I've already had the chance to collaborate on projects for clients such as the Sardegna Region, Green Peace, Gaxa etc...",
    },
    {
      title: "Graphic Designer",
      company: "Freelancer",
      date: "2021",
      description:
        " I've taken on small commissioned projects such as creating invitations, making menu modifications for pizzerias, designing banners for social media profiles, and more. These freelance jobs have provided me with valuable experience and opportunities to continuously apply and enhance my skills.",
    },
    // {
    //   title: "Babysitter",
    //   company: "Piras Family",
    //   date: "2018 - 2021",
    //   description:
    //     "After graduating from high school, I worked as a babysitter/personal nanny. This kind of job allowed me to acquire various soft skills, including time management, safety awareness, discipline strategies, stress management, patience, problem-solving and conflict resolution, event planning, communication, and relationship building. These qualities are essential in any work setting.",
    // },
    // {
    //   title: "Cashier & Waitress",
    //   company: "Eurasia, Cagliari",
    //   date: "Summer 2017",
    //   description:
    //     "Essential in every work sector are also the following skills I have acquired while working as a waitress: customer service orientation, ability to work in a team, kindness and politeness, resilience to fatigue and stress, dynamism and speed, precision and attention to detail, flexibility, reliability, and honesty.",
    // },
  ];

  return (
    <section className="lui-section lui-gradient-top " id="resume-section">
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="v-line v-line-right">
        <div className="container">
          <div className="row d-flex flex-direction-row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Fade direction="right" triggerOnce>
                <h5
                  className="history-title scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span> Education </span>
                </h5>
                <div className="history-items">
                  {educationData.map((item, index) => (
                    <div
                      key={index}
                      className={`history-item lui-collapse-item ${
                        activeEducationItem === index ? "opened" : ""
                      } scrolla-element-anim-1 scroll-animate`}
                      data-animate="active"
                      onClick={() => toggleActiveEducationItem(index)}
                    >
                      <h6
                        className={`name lui-collapse-btn ${
                          activeEducationItem === index ? "active" : ""
                        }`}
                      >
                        <span>{item.title}</span>
                      </h6>
                      <div className="history-content">
                        <div className="subname">
                          <span>{item.company}</span>
                        </div>
                        <div className="date lui-subtitle">
                          <span>{item.date}</span>
                        </div>
                        <div className="text">
                          <div>
                            <p>{item.description}</p>

                            {item.title === "Graphic & Web Design" && (
                              <a
                                target="_blank"
                                href="/assets/graphicDesignCertificate_TrishaR.pdf"
                                className="btn-lnk"
                                download="graphicDesignCertificate_TrishaR.pdf"
                              >
                                Download Graphic Design Certificate
                              </a>
                            )}
                            {item.title === "React Js and Redux" && (
                              <a
                                target="_blank"
                                href="/assets/images/UdemyCertificate_TrishaR.jpeg"
                                className="btn-lnk"
                                download="UdemyCertificate_TrishaR.jpeg"
                              >
                                Download React Redux Certificate
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Fade direction="left" triggerOnce>
                <h5
                  className="history-title scrolla-element-anim-1 scroll-animate history-title-custom"
                  data-animate="active"
                >
                  <span> Experience </span>
                </h5>
                <div className="history-items">
                  {experienceData.map((item, index) => (
                    <div
                      key={index}
                      className={`history-item lui-collapse-item ${
                        activeExperienceItem === index ? "opened" : ""
                      } scrolla-element-anim-1 scroll-animate`}
                      data-animate="active"
                      onClick={() => toggleActiveExperienceItem(index)}
                    >
                      <h6
                        className={`name lui-collapse-btn ${
                          activeExperienceItem === index ? "active" : ""
                        }`}
                      >
                        <span>{item.title}</span>
                      </h6>
                      <div className="history-content">
                        <div className="subname">
                          <span>{item.company}</span>
                        </div>
                        <div className="date lui-subtitle">
                          <span>{item.date}</span>
                        </div>
                        <div className="text">
                          <div>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>

          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
