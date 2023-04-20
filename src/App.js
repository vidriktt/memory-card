import React, { useState, useEffect } from "react";
import './styles/App.css';
import ScoreHeader from "./components/ScoreHeader";
import Cards from "./components/Cards";

const App = () => {
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
        <>
            <ScoreHeader />
            <Cards />
        </>
    );
};

export default App;
