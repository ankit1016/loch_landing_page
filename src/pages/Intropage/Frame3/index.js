import React from "react";
import TestimonialCards from "../../../components/testimonials_card";

const Frame3 = () => {
  const testimonial_messages = [
    {
      id: 1,
      name: "Jack F",
      position: "Ex Blackrock PM",
      message:
        "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
    },
    {
      id: 2,
      name: "Yash P",
      position: "Research, 3poch Crypto Hedge Fund",
      message:
        "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
    },

    {
      id: 3,
      name: "Shiv S",
      position: "Co-Founder Magik Labs",
      message:
        "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
    },
  ];

  return (
    <div style={{ paddingBottom: "40px" }}>
      <div
        style={{
          textAlign: "right",
          color: "#F2F2F2",
          fontSize: "25px",
          fontFamily: "Inter",
          fontWeight: "500",
          wordWrap: "break-word",
          paddingRight: "25px",
        }}
      >
        Testimonials
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          border: "1px rgba(228.75, 229.02, 229.71, 0.50) solid",
          marginTop: "20px",
        }}
      ></div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="testimonial-div">
          <img
            className="testimonial_img"
            alt="testimonial_img"
            src={require("../../../images/vector.svg").default}
          />
        </div>
        <div
          style={{
            maxWidth: "500px",
            display: "flex",
            flexDirection: "row",
            overflow: "scroll",
            padding: "20px",
          }}
        >
          {testimonial_messages.map((mes) => (
            <div style={{ marginRight: "10px" }} key={mes.id}>
              <TestimonialCards
                name={mes.name}
                position={mes.position}
                message={mes.message}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frame3;
