import { useState } from 'react'

import './App.css'
import Data from './service/Data'
import CardBox from './components/CardBox';
import SideBar from './components/SideBar';
function App() {
  const [pokemon,setPokemon]=useState([]);
  const [score,setScore]=useState(0);
  const [selected,setSelected]=useState([]);

  return (
    <>
    <SideBar score={score}/>
    <Data setPokemon={setPokemon}/>
    
    <CardBox pokemon={pokemon}  setPokemon={setPokemon}/>
    


     
    </>
  )
}

export default App
