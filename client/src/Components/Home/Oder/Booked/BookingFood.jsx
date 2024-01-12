import React, { useState } from "react";
import "./BookingFood.css";
import { NavLink } from "react-router-dom";
import apiURL from "../../../config";

const BookingFood = () => {
  const api = apiURL.url;
  const [sendData, setSendData] = useState([
    {
      bname: "",
      bmobile: "",
      baddress: "",
    },
  ]);

  const changeData = (e) => {
    setSendData({ ...sendData, [e.target.name]: [e.target.value] });
  };
  console.log(sendData);

  const nextPageoder = async (e) => {
    e.preventDefault();

    const { bname, bmobile, baddress } = sendData;

    if (bname === "") {
      alert("Please Enter Name");
    } else if (bmobile === "") {
      alert("please enter mobile number");
    } else if (baddress === "") {
      alert("Please Enter Address");
    } else {
      console.log("address");

      const token = await localStorage.getItem("userDataToken");

      const data = await fetch(`${api}/userAddress`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(sendData),
      });

      const res = await data.json();
      console.log(res);
    }
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
            <label htmlFor="bname">Name</label>
            <br />
            <input
              type="text"
              name="bname"
              value={sendData.bname}
              onChange={changeData}
              placeholder="Enter name"
            />
          </div>
          <br />
          <div className="form">
            <label htmlFor="bmobile">Mobile No.</label>
            <br />
            <input
              type="number"
              name="bmobile"
              value={sendData.bmobile}
              onChange={changeData}
              placeholder="Enter mobile number"
              maxLength="10"
              pattern="[0-9]{10}"
            />
          </div>
          <br />
          <div className="form">
            <label htmlFor="baddress">Address</label>
            <br />
            <textarea
              placeholder="Enter address"
              name="baddress"
              value={sendData.baddress}
              onChange={changeData}
              cols="20"
              rows="2"
            ></textarea>
          </div>
          <br />
          <div className="form">
            <button onClick={nextPageoder}>Next</button>
          </div>
          <br />
          <div className="form">
            <p>
              {" "}
              <NavLink>Cancel</NavLink>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingFood;
