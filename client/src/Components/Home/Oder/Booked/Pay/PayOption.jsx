import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const PayOption = () => {
  const history = useNavigate();
  // const { userData } = useContext(useNavigate);
  const payClick = () => {
    history("/oderFood");
  };
  return (
    <>
      <div className="booking">
        <div className="containerBooking">
          <div className="form">
            <h1>Welcome to Food Order</h1>
          </div>
          <br />
          <div className="form">
            {/* <label htmlFor="baddress">Rs </label> */}
          </div>
          <br />
          <div className="form">
            <button onClick={payClick}> Pay</button>
          </div>
          <br />
          <div className="form">
            <p>
              {" "}
              <NavLink to={"/oderFood"}>Cancel</NavLink>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayOption;
