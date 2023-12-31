import { useEffect, useState } from "react";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import toast, { Toaster } from "react-hot-toast";
import imgGithub from "../public/assets/emailPics/image-1.png"

const Contact = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const [valid, setValid] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const nameRegex = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



  const contactInfo = [
    {
      icon: 'far fa-map',
      title: 'Address',
      text: 'Cagliari (CA), Sardegna, Italy',
      link: 'https://www.google.com/maps/place/Cagliari+Sardegna+Italy'
    },
    {
      icon: 'far fa-envelope',
      title: 'Email',
      text: 'dev.trisha.real@gmail.com',
      link: 'mailto:dev.trisha.real@gmail.com'
    },
    {
      icon: 'far fa-address-book',
      title: 'Phone',
      text: '+39 327 407 3331',
      link: 'tel:+393274073331'
    }
  ];

  useEffect(() => {
    if (
      fullName.length > 1 &&
      nameRegex.test(fullName) &&
      emailRegex.test(email) &&
      subject.length > 1 &&
      message.length > 10
    ) {
      setValid(true);
    } else setValid(false);
  }, [fullName, email, subject, message]);

  const clean = () => {
    setFullname("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const sendEmail = () => {
    setEmailSent(true);

    const greetingsEmail = {
      from: email,
      type: "greetings",
      subject: "Thanks for getting in touch!",
      preheader: "Thanks for getting in touch!",
      greetings: `dear  <strong>${fullName}</strong>`,
      img: `${imgGithub}`,
      message:
        "Thank you for contacting me! <br> I'll review your request and get back to you asap. <br> In the meantime, please follow me on <b>LinkedIn</b> for further updates. <br> <br>Have a great day and best regards, <br> Trisha.  ",
      callToAction: {
        name: "Follow me on LinkedIn",
        href: "https://www.linkedin.com/in/graphic-web-trisha",
        active: true,
      },
      conclusion: "",
      thanks: "",
      unsubscribe: {
        name: "Cancel subscription",
        href: "https://www.trishareal.com/",
        message: "Intrusive emails?",
        active: false,
      },
      footer: {
        name: "© 2023, Offer by",
        href: "https://www.trishareal.com/",
        message: "trishareal.com",
        active: true,
      },
    };

    const summaryEmail = {
      from: email,
      type: "summary",
      subject: `${subject}`,
      preheader: "Congratz Tri! You've just received a new request!",
      greetings: `${fullName} just sent you a message:`,
      message: `" <i>${message}</i> "`,
      callToAction: {
        name: "",
        href: "https://www.trishareal.com/",
        active: false,
      },
      conclusion: `Remember to reply and contact <strong>${fullName}</strong> at the email:`,
      emailClient: `${email} .`,
      thanks: "Have a great day!",
      unsubscribe: {
        name: "Cancel subscription",
        href: "http://localhost:3000/",
        message: "Intrusive emails?",
        active: false,
      },
      footer: {
        name: "© 2023, Offer by",
        href: "https://www.trishareal.com/",
        message: "trishasairenereal.vercel.app",
        active: true,
      },
    };

    const emails = { data: [greetingsEmail, summaryEmail] };
    console.log("ERROR");

    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emails),
    })
      .then((response) => response.json())

      .then(() => {
        console.log("-->ERROR**");

        setEmailSent(true);
        clean();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(JSON.stringify("Qualcosa è andato storto, Riprova."));
        clean();
      });

    console.log("ERROR**");
  };

  return (
    <section className="lui-section lui-gradient-bottom" id="contact-section">
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active">
              <span> Contact Me </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active">
              <span>
                Let&apos;s <b>Talk About Ideas</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="lui-contacts v-line v-line-left">
        <div className="container ">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 pt-5">
              <div className="numbers-items">
                <Slide cascade damping={0.1} triggerOnce>
                  {contactInfo.map((info, index) => (
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
                        {info.link ? (
                          <a href={info.link} target="_blank" rel="noopener noreferrer">
                            <span>{info.text}</span>
                          </a>
                        ) : (
                          <span>{info.text}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </Slide>

              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div
                className="contacts-form scrolla-element-anim-1 scroll-animate"
                data-animate="active">
                <div
                  className="bg-img"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}></div>
                {!emailSent && (
                  <div className="contacts-form">

                    <form id="cform" method="POST">
                      <Fade direction="right" triggerOnce>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="group">
                              <label>
                                Your Full Name <b>*</b>
                                <input
                                  className="text-capitalize"
                                  type="text"
                                  name="name"
                                  onChange={(e) => setFullname(e.target.value)}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="group">
                              <label>
                                Your Email Address <b>*</b>
                                <input
                                  type="email"
                                  name="email"
                                  aria-invalid={
                                    !emailRegex.test(email) && email.length > 2
                                      ? "true"
                                      : "false"
                                  }
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="group">
                              <label>
                                Your Subject <b>*</b>
                                <input
                                  type="text"
                                  name="subject"
                                  onChange={(e) => setSubject(e.target.value)}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="group">
                              <label className="msg-label">
                                Your Message <b>*</b>
                                <span>(At least 10 characters)</span>
                              </label>
                              <div className="textarea-container">
                                <textarea
                                  name="message"
                                  onChange={(e) =>
                                    setMessage(e.target.value)
                                  }></textarea>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right terms-button">
                            {!valid && (
                              <>
                                <div className="terms-label warning-label ">
                                  * Please fill out all fields correctly.
                                </div>

                                <button
                                  href="#"
                                  className="btn btn-disabled col-6"
                                  disabled>
                                  <span>Send Message</span>
                                </button>
                              </>
                            )}

                            {valid && (
                              <>
                                <div className="terms-label ready-label">
                                  Ready to send <span>✔</span>
                                </div>

                                <button
                                  href="#"
                                  className="btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    sendEmail();
                                  }}>
                                  <span>Send Message</span>
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </Fade>
                    </form>
                  </div>
                )}

                {emailSent && (
                  <Bounce>

                    <div className="contacts-form contacts-form-confirmed">
                      <div className="msg-confirmed p-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="70"
                          height="70"
                          fill=""
                          className="bi bi-check-circle"
                          viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                        </svg>
                        <h4 className="text-center pt-3">Email sent successfully!</h4>
                        <p className="text-center">
                          Thank you! Please check your email to verify the
                          confirmation.
                        </p>

                        <a
                          href="#contact-section"
                          className="lnk back-to-form"
                          onClick={() => setEmailSent(false)}>
                          Go Back to the form
                        </a>

                      </div>
                    </div>
                  </Bounce>
                )}
              </div>
            </div>
          </div>

          <div className="lui-bgtitle">
            <span> Contact Me </span>
          </div>
        </div>
      </div >

      <Toaster position="top-center" reverseOrder={false} />
    </section >
  );
};

export default Contact;
