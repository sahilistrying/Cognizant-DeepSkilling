import React from "react";
function ListofPlayer(){
    const players=[
        { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "An", score: 61 },
    { name: "Elizabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 }
    ]
    const lowScore=players.filter(player=>player.score<70);
    return(
        <div>
            <h2>List of PLayer</h2>
            <ul>
                {players.map((player,index)=>(
                    <li key={index}>
                        Mr. {player.name} {player.score}
                    </li>
                ))}
            </ul>
            <hr></hr>
            <h2>List of players with score less than 70</h2>
            <ul>
                {lowScore.map((player,index)=>(
                    <li key={index}>
                        Mr. {player.name} {player.score}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ListofPlayer;
