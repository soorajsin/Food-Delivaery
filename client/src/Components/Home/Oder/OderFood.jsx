import React from "react";
import { useContext } from "react";
import { contextNavigate } from "../../Context/ContextProvider";
import "./OderFood.css";
import { useNavigate } from "react-router-dom";

const OderFood = () => {
  const history = useNavigate();
  const { userData } = useContext(contextNavigate);

  const bookedoder = () => {
    history("/bookedFood");
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
                </div>
              ))
            : ""}
        </div>
        <div className="oderContainer">
          <div className="Booked">
            <button onClick={bookedoder}>Order Food</button>
          </div>
          <div className="showoder">
            {/* <div className="show-address">
              {userData.getData.userAddress.map((userAddress, index) => (
                <div key={index} className="show-addre">
                  <h2>{userAddress.bname}</h2>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OderFood;
