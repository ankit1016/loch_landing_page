import React from "react";
import "../../../css/intro_page.css";
const Frame2 = () => {
  return (
    <div className="frame2">
      <div className="cohorts-image">
        <img
          src={require("../../../images/cohorts-1.png")}
          alt="cohorts"
          style={{ height: "17rem" }}
        />
      </div>

      <div className="group-1">
        <div className="eye-image">
          <img
            src={require("../../../images/eye.svg").default}
            alt="cohorts"
            style={{ height: "1.6rem" }}
          />
        </div>

        <div className="text-container">
          <h2 className="heading">Watch what the whales are doing</h2>

          <p className="paragraph">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
