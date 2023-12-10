/**
 * The Signup component is a React functional component that renders a sign-up form with an input field
 * for the user's email address and a button to submit the form.
 * @returns The Signup component is returning a JSX element.
 */
import React from "react";
import "../../css/signup_page.css";

const Signup = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "https://app.loch.one/welcome";
  };

  return (
    <div className="signup-page">
      <div className="main-container">
        <div className="heading">
          Sign up for
          <br /> exclusive access.
        </div>
        <form onSubmit={handleClick}>
          <div className="input-div">
            <input
              className="input"
              placeholder=" Your email address"
              type="email"
              required
            ></input>
          </div>

          <button type="submit" className="button">
            Get started
          </button>
        </form>

        <p className="message">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default Signup;
