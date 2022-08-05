import React from "react";

const SlideImg = ({img, active, title, desc}) => {
  return (
    <div className={`carousel-item ${active}`} data-bs-interval="3500">
      <img src={img} className="d-block w-100" height={"450px"} alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SlideImg;
