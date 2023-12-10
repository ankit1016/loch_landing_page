import React from "react";
import "./testimonials_card.css";

const TestimonialCards = ({ name, position, message }) => {
  return (
    <div className="testi-main-container">
      <div className="testi-layer-1">
        <div className="name">{name}</div>
        <div className="position">{position}</div>
      </div>

      <div className="message">{message}</div>
    </div>
  );
};

export default TestimonialCards;
