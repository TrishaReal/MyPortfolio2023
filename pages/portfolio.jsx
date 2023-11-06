import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Portfolio = () => {

  const devProjects = [
    {
      title: "Sardegna Digital Library",
      imgSrc: "/assets/images/web-Sdl.png",
      demoLink: "https://www.sardegnadigitallibrary.it/",
      category: "Web Development (React Js & Next.js)",
      description: "The multimedia collection of the Autonomous Region of Sardinia. One of my first projects carried out with the React JS team of Softfobia s.r.l and C22.",
    },
    {
      title: "My Gaxa",
      imgSrc: "/assets/images/web-myGaxa.png",
      demoLink: "https://mygaxa.gaxaenergia.it/",
      category: "Web Development (React Js)",
      description: "This summer of 2023, I had the pleasure of working as a member of the React JS team at Softfobia S.r.l. on the My Gaxa portal:  the customer area of Gaxa, a utility company founded in Sardinia that provides electricity and gas services. The entire website was built using pure React, showcasing its capabilities.",
    },
    {
      title: "Regione Autonoma della Sardegna",
      imgSrc: "/assets/images/web-Ras.png",
      demoLink: "https://www.regione.sardegna.it/",
      category: "Web Development (React Js & Next.js)",
      description: "Official website of the Autonomous Region of Sardinia. I had the opportunity to participate, albeit in a small part, in the improvement and evolution of this project alongside the React JS team of Softfobia s.r.l.",
    },
    {
      title: "Greenpeace Portal",
      imgSrc: "/assets/images/web-greenpeace.png",
      demoLink: "https://sostenitori.greenpeace.it/",
      category: "Web Development (React Js & Next.js)",
      description: "Project involving the portal for supporters of the environmental and pacifist organization Greenpeace. My second project carried out with the React JS team of Softfobia s.r.l.",
    },
    {
      title: "Pick Me NFT",
      imgSrc: "/assets/images/web-pickMe.png",
      githubLink: "https://github.com/TrishaReal/PickMe-REDUX",
      category: "Web Development (React Js)",
      description: "App where I got to use popular frontend libraries, with a special emphasis on Redux. Other libraries included Styled-system, Formik, and Yup.",
    },
    {
      title: "Wiki Drink",
      imgSrc: "/assets/images/web-wikidrink.png",
      demoLink: "https://wiki-drink-website.netlify.app/",
      githubLink: "https://github.com/TrishaReal/WikiDrink-Website",
      category: "Web Development (React Js)",
      description: "A complete application featuring a Home Page, an About Page, and a Contact Page. Users can search for the name of any existing cocktail and receive all the instructions to make and enjoy it. If their favorite cocktail is missing, they can reach out to us and we'll add it for them.",
    },
    {
      title: "Color Grading",
      imgSrc: "/assets/images/web-colors.png",
      demoLink: "https://myfirst-color-grading-website.netlify.app/",
      githubLink: "https://github.com/TrishaReal/ColorGrading",
      category: "Web Development (React JS)",
      description: "An app that lets users explore various shades starting from a color of their choice and easily copy it to their clipboard with a simple click.",
    },
    {
      title: "Carousel Vacation Packages",
      imgSrc: "/assets/images/web-vacation.png",
      demoLink: "https://lista-vacanza.netlify.app/",
      githubLink: "https://github.com/TrishaReal/ListaVacanza",
      category: "Web Development (React JS)",
      description: "Scroll through the window display for a series of Vacation Packages: Start learning how to make websites more engaging by mastering the creation of carousels, for example.",
    },
    {
      title: "Parallax Web",
      imgSrc: "/assets/images/web-parallax.png",
      demoLink: "https://first-parallax-website.netlify.app/",
      githubLink: "https://github.com/TrishaReal/parallax-website",
      category: "Web Development (Html and Css)",
      description: " At the beginning of my study of HTML and CSS, I challenged myself by recreating this website with a parallax effect.",
    },

  ];

  const graphicProjects = [
    {
      title: "The Unbearable Lightness of Being",
      behanceLink: "https://www.behance.net/gallery/139222527/Linsostenibile-leggerezza-dellessere-Milan-Kundera",
      imgSrc: "/assets/images/graphic-kundera.jpg",
      category: "Graphic Design (editorial)",
      description: " Study, analysis, and creation of the cover for Milan Kundera&'s novel 'The Unbearable Lightness of Being'.",
    },
    {
      title: "Giù Le Mani",
      behanceLink: "https://www.behance.net/gallery/139230679/Franca-Rame-Locandina-Evento",
      imgSrc: "/assets/images/graphic-franca.jpg",
      category: "Graphic Design (poster advertising)",
      description: " Designing a promotional flyer to raise awareness for a theatrical performance on the International Day against Violence towards Women, featuring Franca Rame's powerful play, 'Lo Stupro.'",
    },
    {
      title: "Kobe Bryant 'Through the years'",
      behanceLink: "https://www.behance.net/gallery/139229395/Kobe-Bryant-Through-The-Years",
      imgSrc: "/assets/images/graphic-kobe.jpg",
      category: "Graphic Design (Editorial)",
      description: "In envisioning the Sports Illustrated cover, I thought it would be fitting to showcase Kobe Bryant as a way to honor his memory following the heartbreaking news in January 2020.",
    },
    {
      title: "Areilà",
      behanceLink: "https://www.behance.net/gallery/139231125/Areila-Azienda-Agricola-%28Brand-Identity%29",
      imgSrc: "/assets/images/graphic-areilà.jpg",
      category: "Brand Identity and Marketing",
      description: "End-of-year team project in collaboration with Accademia d'Arte di Cagliari. We collaborated to create a logo and brand identity for a Sardinian agricultural industry. We interacted with the client to gather information and study the industry's image, which guided us in conceptualizing the brand.",
    },
    {
      title: "La Vie Est Belle",
      behanceLink: "https://www.behance.net/gallery/139230857/Lancome-Paris-La-Vie-Est-Belle",
      imgSrc: "/assets/images/graphic-lancome.jpg",
      category: "Graphic Design (advertising)",
      description: "Creation of an advertising poster to promote products.",
    },
    {
      title: "Vanity Fair Cover",
      behanceLink: "https://www.behance.net/gallery/139230133/Vanity-Fair-Lady-Gaga",
      imgSrc: "/assets/images/graphic-gaga.jpg",
      category: "Graphic Design (editorial)",
      description: " Vanity Fair Cover: We had to choose a celebrity each to portray, and I chose to depict the two faces of Lady Gaga and create an idealized typical VF cover.",
    },


  ];

  return (
    <section className="lui-section lui-gradient-center " id="works-section">


      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active">
              <span> Portfolio </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active">
              <span>
                my <b>Cases</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Fade triggerOnce>
        <div className="v-line v-line-left">
          <div className="container ">
            <div className="works-box">
              <div
                className="filter-links scrolla-element-anim-1 scroll-animate"
                data-animate="active">
                <a
                  href="#"
                  className="lui-subtitle active"
                  data-href=".works-col">
                  All
                </a>

                <a
                  href="#"
                  className="lui-subtitle"
                  data-href=".sorting-development">
                  Development
                </a>
                <a href="#" className="lui-subtitle" data-href=".sorting-graphic">
                  Graphic Design
                </a>
              </div>

              <div className="works-items works-masonry-items row">

                {graphicProjects.map((project, index) => (
                  <div key={`graphicProject-${index}`} className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-graphic">
                    <div
                      className="works-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active">
                      <div className="image">
                        <div className="img">
                          <a
                            href={project.behanceLink}
                            target="_blank">
                            <Image
                              width={550}
                              height={450}
                              decoding="async"
                              src={project.imgSrc}
                              alt={project.title}
                            />
                            <span className="overlay"></span>
                          </a>
                        </div>
                      </div>
                      <div className="desc">
                        <span className="category">{project.category}</span>
                        <h5 className="name">
                          <a
                            href={project.behanceLink}
                            target="_blank">
                            {project.title}
                          </a>
                        </h5>
                        <div className="text">
                          <p>
                            {project.description}
                          </p>
                        </div>

                        {project.behanceLink && (
                          <a href={project.behanceLink} target="_blank" className="lnk">
                            Open behance
                          </a>
                        )}

                      </div>
                      <div
                        className="bg-img"
                        style={{
                          backgroundImage: "url(assets/images/pat-2.png)",
                        }}></div>
                    </div>
                  </div>
                ))}



                {devProjects.map((project, index) => (
                  <div key={`devProject-${index}`} className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development">
                    <div
                      className="works-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active">
                      <div className="image">
                        <div className="img">
                          <a
                            href={project.demoLink}
                            target="_blank">
                            <Image
                              width={550}
                              height={450}
                              decoding="async"
                              src={project.imgSrc}
                              alt={project.title}
                            />
                            <span className="overlay"></span>
                          </a>
                        </div>
                      </div>
                      <div className="desc">
                        <span className="category">
                          {project.category}
                        </span>
                        <h5 className="name">
                          <a
                            href={project.demoLink}
                            target="_blank">
                            {project.title}
                          </a>
                        </h5>
                        <div className="text">
                          <p>{project.description}</p>
                        </div>
                        {project.demoLink && (
                          <a href={project.demoLink} target="_blank" className="lnk">
                            Open demo
                          </a>
                        )}
                        <br />
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" className="lnk">
                            Open github
                          </a>
                        )}
                      </div>
                      <div
                        className="bg-img"
                        style={{
                          backgroundImage: "url(assets/images/pat-2.png)",
                        }}></div>
                    </div>
                  </div>
                ))}


              </div>

            </div>

            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
