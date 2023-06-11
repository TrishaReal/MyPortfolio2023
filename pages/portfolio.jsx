import Image from "next/image";
import React from "react";

const Portfolio = () => {
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
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development  ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://github.com/TrishaReal/PickMe-REDUX"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/web-pickMe.png"
                          alt="Pick Me NFT"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">Web Development (React Js)</span>
                    <h5 className="name">
                      <a
                        href="https://github.com/TrishaReal/PickMe-REDUX"
                        target="_blank">
                        Pick Me NFT
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        App where I got to use popular frontend libraries, with
                        a special emphasis on Redux. Other libraries included
                        Styled-system, Formik, and Yup.
                      </p>
                    </div>
                    <a
                      href="https://github.com/TrishaReal/PickMe-REDUX"
                      target="_blank"
                      className="lnk">
                      See on github
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development  ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://wiki-drink-website.netlify.app/"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/web-wikidrink.png"
                          alt=" Wiki Drink"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">Web Development (React Js)</span>
                    <h5 className="name">
                      <a href="https://wiki-drink-website.netlify.app/">
                        Wiki Drink
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        A complete application featuring a Home Page, an About
                        Page, and a Contact Page. Users can search for the name
                        of any existing cocktail and receive all the
                        instructions to make and enjoy it. If their favorite
                        cocktail is missing, they can reach out to us and we'll
                        add it for them.
                      </p>
                    </div>
                    <a
                      href="https://wiki-drink-website.netlify.app/"
                      target="_blank"
                      className="lnk">
                      See demo
                    </a>
                    <br />
                    <a
                      href="https://github.com/TrishaReal/WikiDrink-Website"
                      target="_blank"
                      className="lnk">
                      See on github
                    </a>
                    <br />
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-graphic ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://www.behance.net/gallery/139230679/Franca-Rame-Locandina-Evento"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/graphic-franca.jpg"
                          alt=" Giù Le Mani"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">
                      Graphic Design (poster advertising)
                    </span>
                    <h5 className="name">
                      <a
                        href="https://www.behance.net/gallery/139230679/Franca-Rame-Locandina-Evento"
                        target="_blank">
                        Giù Le Mani
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        Designing a promotional flyer to raise awareness for a
                        theatrical performance on the International Day against
                        Violence towards Women, featuring Franca Rame's powerful
                        play, "Lo Stupro."
                      </p>
                    </div>
                    <a
                      href="https://www.behance.net/gallery/139230679/Franca-Rame-Locandina-Evento"
                      target="_blank"
                      className="lnk">
                      See on behance
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development  ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://ice-cream-menu-site.netlify.app/"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/web-niceCream.png"
                          alt="Nice Cream"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">Web Development (React JS)</span>
                    <h5 className="name">
                      <a
                        href="https://ice-cream-menu-site.netlify.app/"
                        target="_blank">
                        Nice Cream
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        Creating a categorized ice cream menu for easier
                        filtering and selection.
                      </p>
                    </div>
                    <a
                      href="https://ice-cream-menu-site.netlify.app/"
                      target="_blank"
                      className="lnk">
                      See demo
                    </a>
                    <br />
                    <a
                      href="https://github.com/TrishaReal/IceCreamMenuSite"
                      target="_blank"
                      className="lnk">
                      See on github
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-graphic ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://www.behance.net/gallery/139222527/Linsostenibile-leggerezza-dellessere-Milan-Kundera"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/graphic-kundera.jpg"
                          alt="The Unbearable Lightness of Being"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">Graphic Design (Editorial)</span>
                    <h5 className="name">
                      <a
                        href="https://www.behance.net/gallery/139222527/Linsostenibile-leggerezza-dellessere-Milan-Kundera"
                        target="_blank">
                        Milan Kundera's Book
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        Study, analysis, and creation of the cover for Milan
                        Kundera's novel "The Unbearable Lightness of Being".
                      </p>
                    </div>
                    <a
                      href="https://www.behance.net/gallery/139222527/Linsostenibile-leggerezza-dellessere-Milan-Kundera"
                      target="_blank"
                      className="lnk">
                      See on behance
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-graphic  ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://www.behance.net/gallery/139229395/Kobe-Bryant-Through-The-Years"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/graphic-kobe.jpg"
                          alt="Through the years"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">Graphic Design (Editorial)</span>
                    <h5 className="name">
                      <a
                        href="https://www.behance.net/gallery/139229395/Kobe-Bryant-Through-The-Years"
                        target="_blank">
                        Kobe Bryant <br /> "Through the years"
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        In envisioning the Sports Illustrated cover, I thought
                        it would be fitting to showcase Kobe Bryant as a way to
                        honor his memory following the heartbreaking news in
                        January 2020.
                      </p>
                    </div>
                    <a
                      href="https://www.behance.net/gallery/139229395/Kobe-Bryant-Through-The-Years"
                      target="_blank"
                      className="lnk">
                      See on behance
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development  ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://myfirst-color-grading-website.netlify.app/"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/web-colors.png"
                          alt="Color Grading"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">Web Development (React JS)</span>
                    <h5 className="name">
                      <a
                        href="https://myfirst-color-grading-website.netlify.app/"
                        target="_blank">
                        Color Grading
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        An app that lets users explore various shades starting
                        from a color of their choice and easily copy it to their
                        clipboard with a simple click.
                      </p>
                    </div>
                    <a
                      href="https://myfirst-color-grading-website.netlify.app/"
                      target="_blank"
                      className="lnk">
                      See demo
                    </a>
                    <br />
                    <a
                      href="https://github.com/TrishaReal/ColorGrading"
                      target="_blank"
                      className="lnk">
                      See on github
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development  ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://lista-vacanza.netlify.app/"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/web-vacation.png"
                          alt="Carousel Vacation Packages"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">Web Development (React JS)</span>
                    <h5 className="name">
                      <a
                        href="https://lista-vacanza.netlify.app/"
                        target="_blank">
                        Carousel Vacation Packages
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        Scroll through the window display for a series of
                        Vacation Packages: Start learning how to make websites
                        more engaging by mastering the creation of carousels,
                        for example.
                      </p>
                    </div>
                    <a
                      href="https://lista-vacanza.netlify.app/"
                      target="_blank"
                      className="lnk">
                      See demo
                    </a>
                    <br />
                    <a
                      href="https://github.com/TrishaReal/ListaVacanza"
                      target="_blank"
                      className="lnk">
                      See on github
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-graphic  ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://www.behance.net/gallery/139231125/Areila-Azienda-Agricola-%28Brand-Identity%29"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/graphic-areilà.jpg"
                          alt="Areilà"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">
                      Brand Identity and Marketing
                    </span>
                    <h5 className="name">
                      <a
                        href="https://www.behance.net/gallery/139231125/Areila-Azienda-Agricola-%28Brand-Identity%29"
                        target="_blank">
                        Areilà
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        End-of-year team project. We collaborated to create a
                        logo and brand identity for a Sardinian agricultural
                        industry. We interacted with the client to gather
                        information and study the industry's image, which guided
                        us in conceptualizing the brand.
                      </p>
                    </div>
                    <a
                      href="https://www.behance.net/gallery/139231125/Areila-Azienda-Agricola-%28Brand-Identity%29"
                      target="_blank"
                      className="lnk">
                      See on behance
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-graphic  ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://www.behance.net/gallery/139230857/Lancome-Paris-La-Vie-Est-Belle"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/graphic-lancome.jpg"
                          alt="La vie est belle"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">
                      Graphic Design (advertising)
                    </span>
                    <h5 className="name">
                      <a
                        href="https://www.behance.net/gallery/139230857/Lancome-Paris-La-Vie-Est-Belle"
                        target="_blank">
                        La Vie Est Belle
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        Creation of an advertising poster to promote products.
                      </p>
                    </div>
                    <a
                      href="https://www.behance.net/gallery/139230857/Lancome-Paris-La-Vie-Est-Belle"
                      target="_blank"
                      className="lnk">
                      See on behance
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-graphic  ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://www.behance.net/gallery/139230133/Vanity-Fair-Lady-Gaga"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/graphic-gaga.jpg"
                          alt="Vanity Fair Cover"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">Graphic Design (Editorial)</span>
                    <h5 className="name">
                      <a
                        href="https://www.behance.net/gallery/139230133/Vanity-Fair-Lady-Gaga"
                        target="_blank">
                        Vanity Fair Cover
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        Vanity Fair Cover: We had to choose a celebrity each to
                        portray, and I chose to depict the two faces of Lady
                        Gaga and create an idealized typical VF cover.
                      </p>
                    </div>
                    <a
                      href="https://www.behance.net/gallery/139230133/Vanity-Fair-Lady-Gaga"
                      target="_blank"
                      className="lnk">
                      See on behance
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development  ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://my-first-to-do-list.netlify.app/"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/web-todolist.png"
                          alt="To do list"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">
                      Web Development (Html, css, JS)
                    </span>
                    <h5 className="name">
                      <a
                        href="https://my-first-to-do-list.netlify.app/"
                        target="_blank">
                        To Do List
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        One of the first personal projects I worked on was this
                        to-do list, using just Html, Css, and JavaScript to put
                        my knowledge into practice and starting learning media
                        queries to make the website responsive.
                      </p>
                    </div>
                    <a
                      href="https://my-first-to-do-list.netlify.app/"
                      target="_blank"
                      className="lnk">
                      See demo
                    </a>
                    <br />
                    <a
                      href="https://github.com/TrishaReal/Simple-ToDoList"
                      target="_blank"
                      className="lnk">
                      See on github
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development  ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://first-parallax-website.netlify.app/"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/web-parallax.png"
                          alt="Parallax Web"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">
                      Web Development (Html and Css)
                    </span>
                    <h5 className="name">
                      <a
                        href="https://first-parallax-website.netlify.app/"
                        target="_blank">
                        Parallax Web
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        At the beginning of my study of HTML and CSS, I
                        challenged myself by recreating this website with a
                        parallax effect.
                      </p>
                    </div>
                    <a
                      href="https://first-parallax-website.netlify.app/"
                      target="_blank"
                      className="lnk">
                      See demo
                    </a>
                    <br />
                    <a
                      href="https://github.com/TrishaReal/parallax-website"
                      target="_blank"
                      className="lnk">
                      See on github
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development  ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://whatsapp-web-replica.netlify.app/#"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/web-whatsapp.png"
                          alt="Whatsapp Web"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">
                      Web Development (Html, Css, JS)
                    </span>
                    <h5 className="name">
                      <a
                        href="https://whatsapp-web-replica.netlify.app/#"
                        target="_blank">
                        Whatsapp Web
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        As I started putting my HTML, CSS, and JavaScript
                        knowledge into practice, I embarked on the task of
                        reproducing WhatsApp Web.
                      </p>
                    </div>
                    <a
                      href="https://whatsapp-web-replica.netlify.app/#"
                      target="_blank"
                      className="lnk">
                      See demo
                    </a>
                    <br />
                    <a
                      href="https://github.com/TrishaReal/WhatsappWeb-Replica"
                      target="_blank"
                      className="lnk">
                      See on github
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
              <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development  ">
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active">
                  <div className="image">
                    <div className="img">
                      <a
                        href="https://youtube-replica-base.netlify.app/"
                        target="_blank">
                        <Image
                          width={300}
                          height={240}
                          decoding="async"
                          src="/assets/images/web-yt.png"
                          alt="Youtube Web"
                        />
                        <span className="overlay"></span>
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">
                      Web Development (Html and Css)
                    </span>
                    <h5 className="name">
                      <a
                        href="https://youtube-replica-base.netlify.app/"
                        target="_blank">
                        Youtube Web
                      </a>
                    </h5>
                    <div className="text">
                      <p>
                        As I started putting my HTML and CSS knowledge into
                        practice, I embarked on the task of reproducing Youtube
                        Web.
                      </p>
                    </div>
                    <a
                      href="https://youtube-replica-base.netlify.app/"
                      target="_blank"
                      className="lnk">
                      See demo
                    </a>
                    <br />
                    <a
                      href="https://github.com/TrishaReal/Youtube-Replica"
                      target="_blank"
                      className="lnk">
                      See on github
                    </a>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}></div>
                </div>
              </div>
            </div>
            {/* <div className="load-more-link">
              <a
                href="works.html"
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active">
                <span>View More</span>
              </a>
            </div> */}
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
