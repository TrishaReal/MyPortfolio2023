import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Header = ({ socialLinks }) => {

  const router = useRouter();
  const [activeLink, setActiveLink] = useState("/");

  //State per gestione dropdown del theme color switch 
  const defaultColor = "#29a587"; // Colore predefinito
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  //Gestione del theme color change
  const colors = [
    { code: "#29a587", nameColor: "Green" },
    { code: "#FDD692", nameColor: "Yellow" },
    { code: "#FF8B5C", nameColor: "Orange" },
    { code: "#DA5268", nameColor: "Red" },
    // { code: "#C0007A", nameColor: "Magenta" },
    { code: "#9886B9", nameColor: "Purple" },
    { code: "#799FCC", nameColor: "Light Blue" },
  ];

  useEffect(() => {
    const storedColor = localStorage.getItem("selectedColor");
    if (storedColor) {
      setSelectedColor(storedColor);
      document.documentElement.style.setProperty("--skin-color", storedColor);
    }
  }, []);

  const handleColorChange = (color) => {
    document.documentElement.style.setProperty("--skin-color", color);
    setSelectedColor(color);
    localStorage.setItem("selectedColor", color); // Salva il colore selezionato nel localStorage
    setDropdownVisible(false);
  };


  //Gestione della navigazione da una sezione all'altra nel menu con effetto smooth e activeLink
  const handleMenuClick = (e, target) => {
    e.preventDefault();
    setActiveLink(target);
    if (target === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        router.push(target, target, { scroll: false });
      }, 500);
    } else {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        router.push(target, target, { scroll: false });
      }
    }
  };


  const menuItems = [
    { text: "Home", target: "/" },
    { text: "Skills", target: "#skills-section" },
    { text: "Works", target: "#works-section" },
    { text: "Resume", target: "#resume-section" },
    { text: "Contact", target: "#contact-section" },
  ];

  return (
    <header className="header ">
      <div className="header__builder">
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="logo ">
              <Link href="/" onClick={(e) => handleMenuClick(e, "/")} >
                <Image
                  width={118}
                  height={38}
                  src="/assets/images/logo01.png"
                  alt=""
                />

                <span>
                  <svg className="bi bi-moon-fill pb-1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={selectedColor} viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                  </svg>
                </span>
              </Link>

            </div>
          </div>

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 align-right">
            <a href="#" className="color-switcher-btn mx-4" onClick={(e) => {
              e.preventDefault();
              setDropdownVisible(!isDropdownVisible);
            }}>
              <span className="color-switcher">
                <img src="/assets/svg/palette.png" alt="" style={{ width: "28px" }} />
              </span>

              {isDropdownVisible && (
                <div className="color-dropdown">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className={`color-option ${selectedColor === color.code ? "selected" : ""}`}
                      style={{ backgroundColor: color.code }}
                      titleColor={color.nameColor}
                      onClick={() => handleColorChange(color.code)}
                    />
                  ))}
                </div>
              )}
            </a>
            {/* LIGHT AND DARK SKIN VERSION */}
            <a href="#" className="switcher-btn">
              <span className="sw-before">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23">
                  <path
                    id="Dark_Theme"
                    data-name="Dark Theme"
                    fill="#000"
                    d="M1759.46,111.076a0.819,0.819,0,0,0-.68.147,8.553,8.553,0,0,1-2.62,1.537,8.167,8.167,0,0,1-2.96.531,8.655,8.655,0,0,1-8.65-8.682,9.247,9.247,0,0,1,.47-2.864,8.038,8.038,0,0,1,1.42-2.54,0.764,0.764,0,0,0-.12-1.063,0.813,0.813,0,0,0-.68-0.148,11.856,11.856,0,0,0-6.23,4.193,11.724,11.724,0,0,0,1,15.387,11.63,11.63,0,0,0,19.55-5.553A0.707,0.707,0,0,0,1759.46,111.076Zm-4.5,6.172a10.137,10.137,0,0,1-14.29-14.145,10.245,10.245,0,0,1,3.38-2.836c-0.14.327-.29,0.651-0.41,1.006a9.908,9.908,0,0,0-.56,3.365,10.162,10.162,0,0,0,10.15,10.189,9.776,9.776,0,0,0,3.49-.62,11.659,11.659,0,0,0,1.12-.473A10.858,10.858,0,0,1,1754.96,117.248Z"
                    transform="translate(-1737 -98)"
                  />
                </svg>
              </span>
              <span className="sw-after">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.22"
                  height="22.313"
                  viewBox="0 0 22.22 22.313">
                  <path
                    id="Light_Theme"
                    data-name="Light Theme"
                    fill="#fff"
                    d="M1752.49,105.511a5.589,5.589,0,0,0-3.94-1.655,5.466,5.466,0,0,0-3.94,1.655,5.61,5.61,0,0,0,3.94,9.566,5.473,5.473,0,0,0,3.94-1.653,5.643,5.643,0,0,0,1.65-3.957A5.516,5.516,0,0,0,1752.49,105.511Zm-1.06,6.85a4.1,4.1,0,0,1-5.76,0,4.164,4.164,0,0,1,0-5.788A4.083,4.083,0,0,1,1751.43,112.361Zm7.47-3.662h-2.27a0.768,0.768,0,0,0,0,1.536h2.27A0.768,0.768,0,0,0,1758.9,108.7Zm-10.35,8.12a0.777,0.777,0,0,0-.76.769v2.274a0.777,0.777,0,0,0,.76.767,0.786,0.786,0,0,0,.77-0.767v-2.274A0.786,0.786,0,0,0,1748.55,116.819Zm7.85-.531-1.62-1.624a0.745,0.745,0,0,0-1.06,0,0.758,0.758,0,0,0,0,1.063l1.62,1.625a0.747,0.747,0,0,0,1.06,0A0.759,0.759,0,0,0,1756.4,116.288ZM1748.55,98.3a0.777,0.777,0,0,0-.76.768v2.273a0.778,0.778,0,0,0,.76.768,0.787,0.787,0,0,0,.77-0.768V99.073A0.786,0.786,0,0,0,1748.55,98.3Zm7.88,3.278a0.744,0.744,0,0,0-1.06,0l-1.62,1.624a0.758,0.758,0,0,0,0,1.063,0.745,0.745,0,0,0,1.06,0l1.62-1.624A0.758,0.758,0,0,0,1756.43,101.583Zm-15.96,7.116h-2.26a0.78,0.78,0,0,0-.77.768,0.76,0.76,0,0,0,.77.768h2.26A0.768,0.768,0,0,0,1740.47,108.7Zm2.88,5.965a0.745,0.745,0,0,0-1.06,0l-1.62,1.624a0.759,0.759,0,0,0,0,1.064,0.747,0.747,0,0,0,1.06,0l1.62-1.625A0.758,0.758,0,0,0,1743.35,114.664Zm0-11.457-1.62-1.624a0.744,0.744,0,0,0-1.06,0,0.758,0.758,0,0,0,0,1.063l1.62,1.624a0.745,0.745,0,0,0,1.06,0A0.758,0.758,0,0,0,1743.35,103.207Z"
                    transform="translate(-1737.44 -98.313)"
                  />
                </svg>
              </span>
            </a>
            {/* hamburger menu */}
            <a href="#" className="menu-btn">
              <span></span>
              <span></span>
            </a>

            <div className="menu-full-overlay">
              <div className="menu-full-container">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="menu-full">
                        <ul className="menu-full">
                          {menuItems.map((item, index) => (
                            <li
                              key={index}
                              className={`menu-item ${activeLink.includes(item.target) ? "active" : ""}`}
                            >
                              <Link
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="#"
                                onClick={(e) => handleMenuClick(e, item.target)}
                              >
                                {item.text}
                              </Link>
                            </li>
                          ))}

                          <li className="menu-item">
                            <Link
                              className="splitting-text-anim-2 download-cv"
                              target="_blank"
                              download="CV_TrishaSReal.pdf"
                              href="/assets/CV_TrishaS.Real.pdf"
                              data-splitting="chars"
                              title="pdf format">
                              Download CV
                            </Link>

                          </li>
                        </ul>
                      </div>

                      <div className="menu-social-links">
                        {socialLinks?.map((social, index) => (

                          <a
                            key={index}
                            href={social?.url}
                            target="_blank"
                            className="socialHeader px-2"
                            social-name={social?.name}
                          >
                            <i className={`fab fa-${social?.icon}`}></i>
                          </a>
                        ))}

                      </div>

                      <div className="v-line-block">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
