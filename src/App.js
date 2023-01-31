import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);


  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => {
        console.log(response.data)
        setPokemon(response.data.results)
      })
      .catch((err) => {
        console.log(err);
      })
    },[]);

  return (
    <div className="App">
      <div>
        <button>Fetch Pokemon</button>
        {
            pokemon.map((pokemonObj,index)=>
            {
              return (<li key={index}>{pokemonObj.name}</li>)
            })
        }
    </div>
  </div>
  )
}

export default App;
