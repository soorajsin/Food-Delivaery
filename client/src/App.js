import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Account/Login";
import Register from "./Components/Account/Register";
import Nav from "./Components/Navbar/Nav";
import Staffpage from "./Components/Staff/Staffpage";
import Homepage from "./Components/Home/Homepage";
import FoodAdd from "./Components/Staff/ADD/FoodAdd";
import FoodUpdate from "./Components/Staff/Update/FoodUpdate";
import OderFood from "./Components/Home/Oder/OderFood";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/staff" element={<Staffpage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/addFood" element={<FoodAdd />} />
          <Route path="/updateFood" element={<FoodUpdate />} />
          <Route path="/oderFood" element={<OderFood />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
