import Script from 'next/script';

import { useEffect, useState } from 'react';

const Loader = () => {

  const scriptList = [

    "/assets/js/00_jquery.min.js",
    "/assets/js/01_jquery.validate.min.js",
    "/assets/js/02_bootstrap.js",
    "/assets/js/03_swiper.js",
    "/assets/js/04_splitting.js",
    "/assets/js/05_jarallax.min.js",
    "/assets/js/06_magnific-popup.js",
    "/assets/js/07_imagesloaded.pkgd.js",
    "/assets/js/08_isotope.pkgd.js",
    "/assets/js/09_jquery.scrolla.js",
    "/assets/js/10_skrollr.js",
    "/assets/js/11_jquery.cookie.js",
    "/assets/js/12_typed.js",
    "/assets/js/13_common.js",
  ];


  const [scriptsContent, setScriptsContent] = useState([]);

  const fetchScripts = async (list) => {

    const scriptsContent = await Promise.all(
      list?.map(async (scriptUrl) => {
        const absoluteUrl = new URL(scriptUrl, window.location.origin).toString();
        const response = await fetch(absoluteUrl);
        const content = await response.text();
        return content

      })

    );

    setScriptsContent(() => scriptsContent);

  };


  useEffect(() => {
    fetchScripts(scriptList);
  }, []);


  return (

    scriptsContent?.map((script, index) => {

      return (

        <Script strategy="afterInteractive" key={index} id={`${scriptList[index]}`}>
          {script}
        </Script>

      )
    })

  );

};




export default Loader;
