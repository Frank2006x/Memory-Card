import { useState } from 'react'

import './App.css'
import Data from './service/Data'
import CardBox from './components/CardBox';
import SideBar from './components/SideBar';
function App() {
  const [pokemon,setPokemon]=useState([]);
  const [score,setScore]=useState(0);
  const [bestScore,setBestScore]=useState(0);
  const [selected,setSelected]=useState([]);
  const [gameOver,setGameOver]=useState(false);

  return (
    <>
    <SideBar score={score} bestScore={bestScore}/>
    <Data setPokemon={setPokemon}/>
    
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
    


     
    </>
  )
}

export default App
