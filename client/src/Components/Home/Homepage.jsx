import React, { useContext } from "react";
import { contextNavigate } from "../Context/ContextProvider";
import "./Homepage.css";

const Homepage = () => {
  const { userData } = useContext(contextNavigate);

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
                    <button>ADD</button>
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
