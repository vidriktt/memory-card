import React, { useState, useEffect } from "react";
import '../styles/ScoreHeader.css';

const ScoreHeader = () => {
    // const [color, setColor] = useState("black");

    // useEffect(() => {
    //   const changeColorOnClick = () => {
    //     if (color === "black") {
    //       setColor("red");
    //     } else {
    //       setColor("black");
    //     }
    //   };

    //   document.addEventListener("click", changeColorOnClick);

    //   return () => {
    //     document.removeEventListener("click", changeColorOnClick);
    //   };
    // }, [color]);

    return (
        <div id="score-header">
            <h1>MEMORY CARD GAME</h1>

            <div id="score-div">
                <h3>Score: <span id="score-div-current"></span></h3>
                <h3>High score: <span id="score-div-high"></span></h3>
            </div>
        </div>
    );
};

export default ScoreHeader;
