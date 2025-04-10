import { useState } from 'react'

import './App.css'
import Data from './service/Data'
import Card from './components/Card';
function App() {
  const [pokemon,setPokemon]=useState([]);

  return (
    <>
    <Data setPokemon={setPokemon}/>
    <div className='container'>
      {pokemon.map((element,index)=>
        <Card name={element.name} url={element.url} key={index}/>
      )
      }

    </div>

     
    </>
  )
}

export default App
