import React from "react";

const Card = (props) => {
  const { img, name, role, link } = props;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 item px-5 py-5">
      <img src={img} className="img-fluid border" alt="team" />
      <div className="des">
        <div className="container p-3 transparent text-white">
          <div className="container p-3 bg-dark text-white ">
            <h3 className="text-center text-white">{name}</h3>
            <h6 className="text-center">Level 5 (Undergraduate)</h6>
            <h6 className="text-center">{role}</h6>
            <hr></hr>
            <a href={link} target="blank">
              <img src="images/linkedin.png" alt="Potrait of member" height="25" width="25" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
