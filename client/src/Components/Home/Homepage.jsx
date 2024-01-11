import React, { useContext, useState } from "react";
import { contextNavigate } from "../Context/ContextProvider";
import "./Homepage.css";

const Homepage = () => {
  const { userData, setUserData } = useContext(contextNavigate);
  const [selectedFood, setSelectedFood] = useState([]);

  const handleAddToOrder = () => {
    if (selectedFood) {
      // Assuming the user data structure has an "order" field
      const updatedUserData = {
        ...userData,
        getData: {
          ...userData.getData,
          order: [...(userData.getData.order || []), selectedFood],
        },
      };

      // Update the user data with the new order
      setUserData(updatedUserData);

      // Reset the selectedFood state
      setSelectedFood([]);
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
                    <button onClick={() => setSelectedFood(addFood)}>
                      ADD
                    </button>
                  </div>
                </div>
              ))
            : ""}

          <div className="order">
            <h1>Food Order Show</h1>
            {userData &&
              userData.getData.order &&
              userData.getData.order.map((orderItem, index) => (
                <div key={index} className="order-item">
                  <p>{orderItem.fname}</p>
                  <p>{orderItem.fprice} Rs</p>
                </div>
              ))}
            {selectedFood && (
              <div className="order-item">
                <img src={selectedFood.fimg} alt="img" />
                <h3>{selectedFood.fname}</h3>
                <h4>{selectedFood.fprice} Rs</h4>
              </div>
            )}
            <button onClick={handleAddToOrder}>Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
