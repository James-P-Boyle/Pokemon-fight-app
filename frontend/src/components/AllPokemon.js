import { useState, useEffect } from "react";
import axios from "axios";

import PokemonCard from "./PokemonCard";

export default function AllPokemon() {
  const [pokemons, setPokemons] = useState([]);
  console.log(pokemons);

  useEffect(() => {
    axios
      .get("https://calm-castle-85405.herokuapp.com/pokemon")
      .then((res) => setPokemons(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {pokemons.map((pokemon, index) => {
        return <PokemonCard name={pokemon.name.english} />;
      })}
    </div>
  );
}