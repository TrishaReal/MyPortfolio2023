import Image from "next/image";
import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="spinner-logo">
            <Image
              width={200}
              height={200}
              src="/assets/images/logo02.png"
              alt="Luique - Personal Portfolio HTML Template"
            />
            <div className="spinner-dot"></div>
            <div className="spinner spinner-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
