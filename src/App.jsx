import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import "./App.css";
import Data from "./service/Data";
import CardBox from "./components/CardBox";
import SideBar from "./components/SideBar";
import PopUp from "./components/PopUp";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selected, setSelected] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("best")) {
      setBestScore(localStorage.getItem("best"));
    } else {
      setBestScore(0);
    }
  });
  useEffect(() => {
    if (score > bestScore) {
      localStorage.setItem("best", score);
    }
  }, [score]);
  useEffect(() => {
    if (!gameOver) {
      setScore(0);
    }
    setSelected([]);
  }, [gameOver]);

  return (
    <>
      <SideBar score={score} bestScore={bestScore} />
      <Data setPokemon={setPokemon} gameOver={gameOver} />

      <CardBox
        pokemon={pokemon}
        setPokemon={setPokemon}
        selected={selected}
        setSelected={setSelected}
        gameOver={gameOver}
        setGameOver={setGameOver}
        score={score}
        setScore={setScore}
      />
      {gameOver &&
        createPortal(
          <PopUp score={score} setGameOver={setGameOver} />,
          document.querySelector("#pop-up")
        )}
    </>
  );
}

export default App;
