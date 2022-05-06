import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

export default function AllPokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL)
      .then((res) => setPokemons(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {pokemons.map((pokemon, index) => {
        return (
          <PokemonCard
            id={pokemon.id}
            key={pokemon.id}
            name={pokemon.name.english}
            type={pokemon.type}
          />
        );
      })}
    </div>
  );
}
