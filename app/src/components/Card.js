import React from "react";

const Card = (props) => {
  const { img, name, role, link } = props;
  return (
    <div class="col-lg-4 col-md-6 col-sm-12 item px-5 py-5">
      <img src={img} class="img-fluid border" alt="team" />
      <div class="des">
        <div class="container p-3 transparent text-white">
          <div class="container p-3 bg-dark text-white ">
            <h3 class="text-center text-white">{name}</h3>
            <h6 class="text-center">Level 5 (Undergraduate)</h6>
            <h6 class="text-center">{role}</h6>
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
