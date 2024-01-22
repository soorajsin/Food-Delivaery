import React, { useEffect, useState } from "react";
// import { contextNavigate } from "../Context/ContextProvider";
import "./Homepage.css";
import apiURL from "../config";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const history = useNavigate();
  const api = apiURL.url;
  // const { userData } = useContext(contextNavigate);
  const [addFoodData, setAddFoodData] = useState([]);

  const fetchAllData = async () => {
    try {
      const data = await fetch(`${api}/allFood`,{
        method:"GET"
      });
      const res = await data.json();
      console.log("Sooraj dtaa  " + res);

      if (res.status === 200) {
        setAddFoodData(res.allFood);
        console.log("addFoodData:", addFoodData);
      } else {
        console.error("Failed to fetch food data");
      }
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  useEffect(() => {

    fetchAllData();
  }, ); // Include addFoodData in the dependency array

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

    if (res.status === 207) {
      history("/oderFood");
    } else {
      alert("Failed to Order Food");
    }
  };

  return (
    <>
      <div className="home">
        <div className="homeContainer">
          {addFoodData.map((addFood, index) => (
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
