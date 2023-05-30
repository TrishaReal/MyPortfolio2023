import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="spinner-logo">
            <img
              src="assets/images/logo2.png"
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
