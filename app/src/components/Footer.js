import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundColor: "rgb(0, 0, 0)",
          paddingTop: "60px",
          paddingBottom: "30px",
        }}
      >
        <div className="row text-center justify-content-center">
          <a className="logo col-md-12" href="/">
            <img
              src="images/NeuroScan_icon.png"
              alt="Neuro scan logo"
              style={{ width: "110px" }}
            />
          </a>
          <hr />

          <p className="text-color col-md-12">
            <br />
            <br />
            Designed by ©Team Thambapanni
            <br />
            ~2021~
          </p>

          <a
            className="logo"
            href="https://github.com/Team-Thambapanni/SDGP.git"
            target="_blank"
            rel="noreferrer"
          >
            <img src="images/github.png" alt="github logo" width="55" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
