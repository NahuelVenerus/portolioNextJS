import React from "react";
import "../../styles/swiperStyles.css";

const SwiperSlide = ({ image }) => {
  return (
    <div className="slide" style={{ marginRight: "15px" }}>
      <h2 className="project-name">{image.name}</h2>
      <div className="swiperBorder">
        <a href={image.link} target="_blank" rel="noopener noreferrer">
          <img
            style={{ zIndex: "-1" }}
            src={image.image}
            alt="Project Slide"
            className="swiperImage"
          />
        </a>
      </div>
    </div>
  );
};

export default SwiperSlide;
