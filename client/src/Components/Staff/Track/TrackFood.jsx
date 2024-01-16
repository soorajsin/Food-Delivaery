import React, { useContext } from "react";
import "./TrackFood.css";
import { contextNavigate } from "../../Context/ContextProvider";

const TrackFood = () => {
  const { userData } = useContext(contextNavigate);
  return (
    <>
      <div className="trackFood">
        <div className="trackContainer">
          <h1>Track Your Food</h1>
          <div className="trackShow">
            {userData && userData.getData.buyFood.length > 0
              ? userData.getData.buyFood.map((buyFood, index) => {
                  console.log("buyFood:", buyFood);
                  const matchedFood = userData.getData.addFood.find(
                    (food) => food._id === buyFood.addFoodId
                  );
                  console.log("matchedFood:", matchedFood);

                  return (
                    <div key={index} className="showBuy">
                      {matchedFood &&
                        buyFood.name &&
                        buyFood.mobile &&
                        buyFood.address && (
                          <>
                            <img src={matchedFood.fimg} alt="img" />
                            <h3>{matchedFood.fname}</h3>
                            <p>{buyFood.name}</p>
                            <p>{buyFood.mobile}</p>
                            <p>{buyFood.address}</p>
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

export default TrackFood;
