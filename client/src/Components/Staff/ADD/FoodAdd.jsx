import React, { useState } from "react";
import "./FoodAdd.css";
import { NavLink, useNavigate } from "react-router-dom";
import apiURL from "../../config";

const FoodAdd = () => {
  const history = useNavigate();
  const api = apiURL.url;
  const [editFood, setEditFood] = useState([
    {
      fname: "",
      fprice: "",
      fimg: "",
      description: "",
    },
  ]);

  const addFoodForm = () => {
    const newForm = {
      fname: "",
      fprice: "",
      fimg: "",
      description: "",
    };
    setEditFood([...editFood, newForm]);
  };
  console.log(editFood);

  const submitFoodData = async () => {
    const emptyField = editFood.some(
      (form) =>
        form.fname === "" ||
        form.fprice === "" ||
        form.fimg === "" ||
        form.description === ""
    );

    if (emptyField) {
      alert("Please fill all fields");
    } else {
      console.log("add");

      const token = await localStorage.getItem("userDataToken");
      const data = await fetch(`${api}/addFood`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ editFood }),
      });

      const res = await data.json();
      //       console.log(res);

      if (res.status === 203) {
        console.log(res);
        history("/staff");
      } else {
        alert("Error");
        history("/");
      }
    }
  };

  return (
    <>
      <div className="food">
        <div className="foodContainer">
          <div className="formFood">
            <h1>Welcome to Add Food</h1>
          </div>
          <br />
          {editFood.map((subForm, index) => (
            <div key={index}>
              <div className="formFood">
                <label htmlFor="fname">Food Name</label>
                <br />
                <input
                  type="text"
                  value={subForm.fname}
                  onChange={(e) => {
                    const updatedUser = [...editFood];
                    updatedUser[index].fname = e.target.value;
                    setEditFood(updatedUser);
                  }}
                  placeholder="Enter food name "
                />
              </div>
              <br />
              <div className="formFood">
                <label htmlFor="fprice">Food Price</label>
                <br />
                <input
                  type="number"
                  value={subForm.fprice}
                  onChange={(e) => {
                    const updatedUser = [...editFood];
                    updatedUser[index].fprice = e.target.value;
                    setEditFood(updatedUser);
                  }}
                  placeholder="Enter food price"
                />
              </div>
              <br />
              <div className="formFood">
                <label htmlFor="fimg">Food Image Address</label>
                <br />
                <input
                  type="url"
                  value={subForm.fimg}
                  onChange={(e) => {
                    const updatedUser = [...editFood];
                    updatedUser[index].fimg = e.target.value;
                    setEditFood(updatedUser);
                  }}
                  placeholder="Enter food img address"
                />
              </div>
              <br />
              <div className="formFood">
                <label htmlFor="description">Description</label>
                <br />
                <textarea
                  value={subForm.description}
                  onChange={(e) => {
                    const updatedUser = [...editFood];
                    updatedUser[index].description = e.target.value;
                    setEditFood(updatedUser);
                  }}
                  placeholder="Enter food description"
                  cols="20"
                  rows="2"
                ></textarea>
              </div>
            </div>
          ))}
          <br />
          <div className="formFood">
            <button onClick={addFoodForm}>ADD Food</button>
          </div>
          <br />
          <div className="formFood">
            <button onClick={submitFoodData}>Submit</button>
          </div>
          <br />
          <div className="formFood">
            <p>
              <NavLink to={"/staff"}>Cancel</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodAdd;
