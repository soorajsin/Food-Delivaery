import React, { useState } from "react";
import "./mix.css";
import { NavLink, useNavigate } from "react-router-dom";
import apiURL from "../config";

const Login = () => {
  const history = useNavigate();
  const api = apiURL.url;
  const [sendData, setSendData] = useState({
    email: "",
    password: "",
  });

  const changeData = (e) => {
    setSendData({ ...sendData, [e.target.name]: e.target.value });
  };
  console.log(sendData);

  const submitToLogin = async (e) => {
    e.preventDefault();

    const { email, password } = sendData;

    if (email === "") {
      alert("Email is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid Email");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 6) {
      alert("Password should be at least 6 characters long");
    } else {
      console.log("login");

      const data = await fetch(`${api}/login`, {
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
        localStorage.setItem("userDataToken", res.userData.token);
        history("/staff");
      } else if (res.status === 205) {
        alert("Email is registered");
      } else if (res.status === 206) {
        alert("Password is not matched");
      } else {
        console.log("login failed");
      }
    }
  };

  return (
    <div className="register">
      <div className="registerContainer">
        <div className="form">
          <h1>Welcome to Login</h1>
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
          <button onClick={submitToLogin}>Login</button>
        </div>
        <br />
        <div className="form">
          <p>
            have not an account? <NavLink to={"/register"}>Register</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
