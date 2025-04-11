import { useState } from 'react'

import './App.css'
import Data from './service/Data'
import CardBox from './components/CardBox';
function App() {
  const [pokemon,setPokemon]=useState([]);

  return (
    <>
    <Data setPokemon={setPokemon}/>
    <CardBox pokemon={pokemon}/>

     
    </>
  )
}

export default App
