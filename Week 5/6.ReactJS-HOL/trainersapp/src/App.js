import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import TrainerList from "./Trainerlist";
import TrainerDetails from "./TrainerDetails";
import trainersMock from "./TrainerMock";
function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My Academy Trainers</h1>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/trainers">Show Trainers</Link>
        <Routes>
          <Route path="/trainers" element={<TrainerList trainers={trainersMock} />} />
          <Route path="/trainers/:id" element={<TrainerDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
