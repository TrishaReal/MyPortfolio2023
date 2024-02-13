import { Slide } from "react-awesome-reveal";

const MySkills = () => {

  const personalInfo = [
    {
      icon: "far fa-calendar",
      title: "Birth Date and Place",
      value: "July 11, 1999 - Milan, Italy",
    },
    // {
    //   icon: "fa fa-globe",
    //   title: "Nationality",
    //   value: "Filipino (Philippines)",
    // },
    {
      icon: "fa fa-language",
      title: "Languages",
      value: "Italian, English, Tagalog(ph)",
    },
  ];

  // Define skills data
  const skills = [
    {
      name: "Html5",
      width: "90%",
      value: 90,
    },
    {
      name: "Css/Css3",
      width: "90%",
      value: 90,
    },
    {
      name: "Bootstrap",
      width: "80%",
      value: 80,
    },
    {
      name: "JavaScript",
      width: "65%",
      value: 65,
    },
    {
      name: "React Js",
      width: "65%",
      value: 65,
    },
    {
      name: "Next.js",
      width: "50%",
      value: 50,
    },
    {
      name: "Adobe Photoshop",
      width: "70%",
      value: 70,
    },
    {
      name: "Adobe Illustrator",
      width: "70%",
      value: 70,
    },
  ];

  const splitIndex = Math.ceil(skills.length / 2);
  const skillsColumn1 = skills.slice(0, splitIndex);
  const skillsColumn2 = skills.slice(splitIndex);


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

            {/* Personal Information */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 pb-5">
              <div className="numbers-items">
                <Slide cascade damping={0.1} triggerOnce>
                  {personalInfo.map((info, index) => (
                    <div
                      key={index}
                      className="numbers-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className={info.icon}></i>
                      </div>
                      <div className="title">
                        <span>{info.title}</span>
                      </div>
                      <div className="lui-text">
                        <span>{info.value}</span>
                      </div>
                    </div>
                  ))}
                </Slide>
              </div>

            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="skills-items">
                <Slide cascade damping={0.1} direction="right" className="slide" triggerOnce>
                  {skillsColumn1.map((skill, index) => (
                    <div
                      key={index}
                      className="skills-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <h6 className="name">
                        <span>{skill.name}</span>
                      </h6>
                      <div className="dots">
                        <div className="dot" style={{ width: skill.width }}>
                          <span></span>
                        </div>
                      </div>
                      <div className="value">
                        <span className="num">
                          {skill.value} <span>%</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </Slide>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="skills-items">
                <Slide cascade damping={0.1} direction="right" className="slide" triggerOnce>
                  {skillsColumn2.map((skill, index) => (
                    <div
                      key={index}
                      className="skills-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <h6 className="name">
                        <span>{skill.name}</span>
                      </h6>
                      <div className="dots">
                        <div className="dot" style={{ width: skill.width }}>
                          <span></span>
                        </div>
                      </div>
                      <div className="value">
                        <span className="num">
                          {skill.value} <span>%</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </Slide>
              </div>
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
