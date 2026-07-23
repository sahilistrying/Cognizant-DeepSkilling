import React from "react";
function IndianPlayer() {
    const oddTeam = ["Sachin",
        "Virat",
        "Yuvraj"];
    const evenTeam = [
        "Dhoni",
        "Rohit",
        "Raina"
    ];
    const [first,second,third]=oddTeam;
    const [firstEven, secondEven,thirdEven]=evenTeam;
      const T20Players = [
    "First Player",
    "Second Player",
    "Third Player"
  ];
  const RanjiPlayers = [
    "Fourth Player",
    "Fifth Player",
    "Sixth Player"
  ];
  const IndianPlayers = [...T20Players,...RanjiPlayers];
  return(
    <div>
        <h2>Odd players</h2>
        <ul>
            <li>First:{first}</li>
            <li>Second : {second}</li>
            <li>Third : {third}</li>
        </ul>
         <hr />
      <h2>Even Players</h2>
      <ul>
        <li>Second : {firstEven}</li>
        <li>Fourth : {secondEven}</li>
        <li>Sixth : {thirdEven}</li>
      </ul>
      <hr />
      <h2>List of indian players mergerd</h2>
      <ul>
        {IndianPlayers.map((player,index)=>(
            <li key={index}>
                Mr. {player}
            </li>
        ))}
        </ul>
    </div>
  )
}
export default IndianPlayer;
