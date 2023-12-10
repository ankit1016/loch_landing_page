import React from "react";

const Group1 = () => {
  return (
    <div className="box">
      <div className="group">
        <img
          className="bell"
          alt="Bell"
          src={require("../../../images/bell.svg").default}
        />
        <h1 className="heading">
          Get notified when a highly correlated whale makes a move
        </h1>
        <p className="text-wrapper">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>
    </div>
  );
};

export default Group1;
