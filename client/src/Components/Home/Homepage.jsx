import React, { useContext } from "react";
import { contextNavigate } from "../Context/ContextProvider";
import "./Homepage.css";
import apiURL from "../config";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const history = useNavigate();
  const api = apiURL.url;
  const { userData } = useContext(contextNavigate);

  const orderFood = async (addFoodId, index) => {
    const token = await localStorage.getItem("userDataToken");

    const data = await fetch(`${api}/oderFood`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ addFoodId }),
    });

    const res = await data.json();
    // console.log(res);

    if (res.status === 207) {
      console.log(res);
      history("/oderFood");
    } else {
      alert("Failed to Order Food");
    }
  };

  return (
    <>
      <div className="home">
        <div className="homeContainer">
          {userData
            ? userData.getData.addFood.map((addFood, index) => (
                <div key={index} className="show-data">
                  <img src={addFood.fimg} alt="img" />
                  <h3>{addFood.fname}</h3>
                  <h4>{addFood.fprice} Rs</h4>
                  <p>{addFood.description}</p>
                  <div className="addcustomer">
                    <button onClick={() => orderFood(addFood._id, index)}>
                      ADD
                    </button>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default Homepage;
