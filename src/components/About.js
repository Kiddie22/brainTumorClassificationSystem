import React from "react";

const About = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        backgroundSize: "cover",
        height: "auto",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="about" id="about">
        <div className="container py-5  row">
          <h1 className="text-center icon-color col-lg-6">About Us</h1>
          <p className="text-center col-lg-6 text-color">
            We are a team of six undergraduates from IIT. Neuroscan is the
            result of several months of brainstorming and development. It is a
            project we have undertaken for the SDGP module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
