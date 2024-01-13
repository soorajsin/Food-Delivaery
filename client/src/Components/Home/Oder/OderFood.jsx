import React from "react";
import { useContext } from "react";
import { contextNavigate } from "../../Context/ContextProvider";
import "./OderFood.css";
import apiURL from "../../config";

const OderFood = () => {
  const api = apiURL.url;
  const { userData } = useContext(contextNavigate);

  const buyFood = async (addFoodId, index) => {
    const name = prompt("Enter your name");
    const mobile = prompt("Enter your mobile no.");
    const address = prompt("Enter your address");

    const token = await localStorage.getItem("userDataToken");
    const data = await fetch(`${api}/buyFood`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({ addFoodId, name, mobile, address }),
    });

    const res = await data.json();
    console.log(res);
  };

  const buyFoodDelete = async (buyFoodId, index) => {
    const token = await localStorage.getItem("userDataToken");
    const data = await fetch(`${api}/buyFooddelete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ buyFoodId }),
    });

    const res = await data.json();
    // console.log(res);

    if (res.status === 202) {
      console.log(res);
    } else {
      alert("Error in deleting the item");
    }
  };

  return (
    <>
      <div className="home2">
        <div className="homeContainer2">
          {userData
            ? userData.getData.addFood.map((addFood, index) => (
                <div key={index} className="show-data2">
                  <img src={addFood.fimg} alt="img" />
                  <h3>{addFood.fname}</h3>
                  <h4>{addFood.fprice} Rs</h4>
                  <p>{addFood.description}</p>
                  <div className="buy">
                    <button onClick={() => buyFood(addFood._id, index)}>
                      Buy
                    </button>
                  </div>
                </div>
              ))
            : ""}
        </div>
        <div className="oderContainer">
          <h1>Your Order List</h1>
          <div className="oderShow">
            {userData
              ? userData.getData.buyFood.map((buyFood, index) => {
                  const matchedFood = userData.getData.addFood.find(
                    (food) => food._id === buyFood.addFoodId
                  );

                  return (
                    <div key={index} className="showBuy">
                      {matchedFood && (
                        <>
                          <img src={matchedFood.fimg} alt="img" />
                          <h3>{matchedFood.fname}</h3>
                          <p>{buyFood.name}</p>
                          <p>{buyFood.mobile}</p>
                          <p>{buyFood.address}</p>
                          <div className="deleteff">
                            <i
                              onClick={() => buyFoodDelete(buyFood._id, index)}
                              class="fa-solid fa-trash"
                            ></i>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default OderFood;
