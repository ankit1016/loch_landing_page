import "../../../css/intro_page.css";

const Group2 = () => {
  return (
    <div className="main-card-div">
      <div className="frame card1">
        <div className="first_row">
          <img
            style={{ height: "1rem" }}
            alt="Bell"
            src={require("../../../images/card-bell.svg").default}
          />
          <div
            style={{ color: "black", cursor: "pointer", fontSize: "0.8rem" }}
          >
            Save
          </div>
        </div>

        <div className="second_row">
          We’ll be sending
          <br />
          notifications to you
          <br />
          here
        </div>

        <div
          style={{
            padding: "4.2px",
            background: "white",
            borderRadius: 5.6,
            border: "0.70px #D4D4D4 solid",
            justifyContent: "flex-start",
            alignItems: "center",
            display: "inline-flex",
            zIndex: "2",
          }}
        >
          <input
            style={{
              color: "#19191A",
              fontSize: "0.8rem",
              fontFamily: "Inter",
              fontWeight: "500",
              width: "100%",
              border: "none",
              outline: "none",
              // lineHeight: 15.6,
              wordWrap: "break-word",
            }}
            // className="first-name-instance"
            // divClassName="design-component-instance-node"
            // state="default"
            // text="hello@gmail.com"
            placeholder="
        hello@gmail.com"
            type="text"
          />
        </div>
      </div>

      <div className="frame card2">
        <div className="first_row">
          <img
            style={{ height: "1rem" }}
            alt="Bell"
            src={require("../../../images/bar-chart.svg").default}
          />
          <div
            style={{ color: "black", cursor: "pointer", fontSize: "0.8rem" }}
          >
            <input type="checkbox" defaultChecked />
          </div>
        </div>

        <div
          style={{
            color: "#19191A",
            fontSize: 11.2,
            // fontFamily: "Inter",
            // fontWeight: "500",
            // wordWrap: "break-word",
            // width: "max-content",
          }}
          className="second_row"
        >
          Notify me when any wallets
          <br />
          move more than
        </div>

        <div
          style={{
            padding: "3.2px",
            background: "rgba(228.75, 229.02, 229.71, 0.50)",
            borderRadius: 5.6,
            border: "0.70px #D4D4D4 solid",
            justifyContent: "flex-start",
            alignItems: "center",
            display: "inline-flex",
            width: "50%",
            zIndex: "2",
          }}
        >
          <select
            id="cars"
            style={{
              color: "#19191A",
              fontSize: "0.7rem",
              fontFamily: "Inter",
              fontWeight: "500",
              width: "100%",
              border: "none",
              outline: "none",
              background: "none",
              // lineHeight: 15.6,
              wordWrap: "break-word",
            }}
          >
            <option defaultValue="volvo">$1000</option>
            <option value="saab">$2000</option>
            <option value="vw">$3000</option>
            <option value="audi">$4000</option>
          </select>
        </div>
      </div>

      <div className="frame card3">
        <div className="first_row">
          <img
            style={{ height: "1rem" }}
            alt="Bell"
            src={require("../../../images/clock.svg").default}
          />
          <div
            style={{ color: "black", cursor: "pointer", fontSize: "0.8rem" }}
          >
            <input type="checkbox" defaultChecked />
          </div>
        </div>

        <div
          style={{
            color: "#19191A",
            fontSize: 11.2,
            // fontFamily: "Inter",
            // fontWeight: "500",
            // wordWrap: "break-word",
            // width: "max-content",
          }}
          className="second_row"
        >
          Notify me when any wallets
          <br />
          move more than
        </div>

        <div
          style={{
            padding: "3.2px",
            background: "rgba(228.75, 229.02, 229.71, 0.50)",
            borderRadius: 5.6,
            border: "0.70px #D4D4D4 solid",
            justifyContent: "flex-start",
            alignItems: "center",
            display: "inline-flex",
            width: "40%",
            zIndex: "2",
          }}
        >
          <select
            id="cars"
            style={{
              color: "#19191A",
              fontSize: "0.7rem",
              fontFamily: "Inter",
              fontWeight: "500",
              width: "100%",
              border: "none",
              outline: "none",
              background: "none",
              wordWrap: "break-word",
            }}
          >
            <option defaultValue="30">&lt;30</option>
            <option value="20"> &lt;20</option>
            <option value="10"> &lt;10</option>
            <option value="5"> &lt;50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Group2;
