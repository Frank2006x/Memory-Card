import { useState } from 'react'

import './App.css'
import Data from './service/Data'
import Card from './components/Card';
function App() {
  const {pokemon,setPokemon}=useState([]);

  return (
    <>
    <Data setPokemon={setPokemon}/>
    {pokemon.map(element=>
      <Card name={element.name} url={element.url}/>
    )
    }

      
    </>
  )
}

export default App
