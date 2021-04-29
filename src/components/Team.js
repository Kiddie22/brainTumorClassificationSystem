import React from "react";
import About from "./About";
import Card from "./Card";
import Vision from "./Vision";

const Team = () => {
  return (
    <>
      <Vision />
      <div id="parallax-image-2">
        <div className="container">
          <br />
          <h1 className="text-center text-color">Our Team</h1>
          <h6 className="text-center text-color">-Team Thambapanni-</h6>
          <br />

          <div className="row justify-content-center">
            <Card
              img={"images/rasula.jpg"}
              name={"Rasula Yadithya"}
              role={"Team Leader"}
              link={"https://www.linkedin.com/in/rasula-yadithya"}
            />

            <Card
              img={"images/sithira.jpg"}
              name={"Sithira Mithsara"}
              role={"Team Member"}
              link={"https://www.linkedin.com/in/sithira-mithsara"}
            />

            <Card
              img={"images/udul.jpeg"}
              name={"Udul Helambage"}
              role={"Team Member"}
              link={"https://www.linkedin.com/in/udulsree"}
            />

            <Card
              img={"images/ransara.jpg"}
              name={"Ransara Kodithuwakku"}
              role={"Team Member"}
              link={
                "https://www.linkedin.com/in/ravindu-kodithuwakku-6914a71a6"
              }
            />

            <Card
              img={"images/chanuka 2.jpg"}
              name={"Chanuka Amarasinghe"}
              role={"Team Member"}
              link={"https://www.linkedin.com/in/chanuka-amarasinghe-1215381b8"}
            />

            <Card
              img={"images/manula.jpg"}
              name={"Manula Haputhanthrie"}
              role={"Team Member"}
              link={"https://www.linkedin.com/in/manula-haputhanthrie"}
            />
          </div>
        </div>
        <About />
      </div>
    </>
  );
};

export default Team;
