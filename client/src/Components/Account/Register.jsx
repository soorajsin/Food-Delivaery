import React, { useState } from "react";
import "./mix.css";
import { NavLink, useNavigate } from "react-router-dom";
import apiURL from "../config";

const Register = () => {
  const history = useNavigate();
  const api = apiURL.url;
  const [sendData, setSendData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const changeData = (e) => {
    setSendData({ ...sendData, [e.target.name]: e.target.value });
  };
  console.log(sendData);

  const submitToRegister = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = sendData;
    if (name === "") {
      alert("Name is required");
    } else if (email === "") {
      alert("Email is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid Email");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 6) {
      alert("Password should be at least 6 characters long");
    } else if (cpassword === "") {
      alert("Confirm Password field cannot be empty");
    } else if (cpassword.length < 6) {
      alert("Confirm Password must be atleast 6 character long");
    } else if (password !== cpassword) {
      alert("Both passwords are not the same");
    } else {
      console.log("register");

      const data = await fetch(`${api}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      });

      const res = await data.json();
      //       console.log(res);

      if (res.status === 201) {
        console.log(res);
        history("/");
      } else if (res.status === 205) {
        alert("Email Already Exist");
        history("/");
      } else {
        console.log("error ");
      }
    }
  };

  return (
    <>
      <div className="register">
        <div className="registerContainer">
          <div className="form">
            <h1>Welcome to Register</h1>
          </div>
          <br />
          <div className="form">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={sendData.name}
              onChange={changeData}
              placeholder="Enter name "
            />
          </div>
          <br />
          <div className="form">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={sendData.email}
              onChange={changeData}
              placeholder="Enter email"
            />
          </div>
          <br />
          <div className="form">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={sendData.password}
              onChange={changeData}
              placeholder="Enter password"
            />
          </div>
          <br />
          <div className="form">
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              name="cpassword"
              value={sendData.cpassword}
              onChange={changeData}
              placeholder="Enter confirm password"
            />
          </div>
          <br />
          <div className="form">
            <button onClick={submitToRegister}>Register</button>
          </div>
          <br />
          <div className="form">
            <p>
              Already have an account? <NavLink to={"/"}>Login</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
