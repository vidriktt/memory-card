import React, { useState, useEffect } from "react";
import '../styles/Cards.css';

const Cards = () => {
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
        <div id="cards">
            <div id="card-01">
                <img src="images/Sport-01.png" alt="sport1"/>
                <h4>Table tennis</h4>
            </div>
            <div id="card-02">
                <img src="images/Sport-02.png" alt="sport2"/>
                <h4>Tennis</h4>
            </div>
            <div id="card-03">
                <img src="images/Sport-03.png" alt="sport3"/>
                <h4>Badminton</h4>
            </div>
            <div id="card-04">
                <img src="images/Sport-04.png" alt="sport4"/>
                <h4>Pool</h4>
            </div>

            <div id="card-05">
                <img src="images/Sport-05.png" alt="sport5"/>
                <h4>Golf</h4>
            </div>
            <div id="card-06">
                <img src="images/Sport-06.png" alt="sport6"/>
                <h4>Basketball</h4>
            </div>
            <div id="card-07">
                <img src="images/Sport-07.png" alt="sport7"/>
                <h4>Bowling</h4>
            </div>
            <div id="card-08">
                <img src="images/Sport-08.png" alt="sport8"/>
                <h4>Baseball</h4>
            </div>

            <div id="card-09">
                <img src="images/Sport-09.png" alt="sport9"/>
                <h4>Volleyball</h4>
            </div>
            <div id="card-10">
                <img src="images/Sport-10.png" alt="sport10"/>
                <h4>Weights</h4>
            </div>
            <div id="card-11">
                <img src="images/Sport-11.png" alt="sport11"/>
                <h4>Football</h4>
            </div>
            <div id="card-12">
                <img src="images/Sport-12.png" alt="sport12"/>
                <h4>American football</h4>
            </div>
        </div>
    );
};

export default Cards;
