import React from "react";
import "./App.css";
function App() {
  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore",
    },
    {
      Name: "WeWork",
      Rent: 55000,
      Address: "Hyderabad",
    },
  ];
  return (
    <div>
      <h1>Office Space, at Affordable Range</h1>
      {officeList.map((item, index) => (
        <div key={index}>
          <img
            src=""
            height="200"
            width="200"
            alt="Office Space"
          />
          <h2>Name: {item.Name}</h2>
          <h3 className={item.Rent <= 60000 ? "textGreen" : "textRed"}>
            Rent: Rs. {item.Rent}
          </h3>
          <h3>Address: {item.Address}</h3>
        </div>
      ))}
    </div>
  );
}
export default App;
