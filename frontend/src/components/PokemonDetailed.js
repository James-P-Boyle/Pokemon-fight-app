import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PokemonDetailed() {
  const [pokemon, setPokemon] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}${id}`)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div
      className="bg-red-700 hover:bg-red-600 
      pl-2 py-5 rounded-lg w-1/3 flex flex-col 
      justify-center items-center shadow-xl mx-auto m-2
      border-8 border-blue-500"
    >
      {pokemon ? (
        <div className="text-2xl">
          <h2 className="text-5xl underline text-center">
            {pokemon.name.english}
          </h2>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt=""
            className="h-60 w-60 mx-auto"
          />

          <div className="border-8 border-yellow-500 p-4 rounded-lg">
            <h2>BASE</h2>
            <p>HP: {pokemon.base.HP}</p>
            <p>Attack: {pokemon.base.Attack}</p>
            <p>Defense: {pokemon.base.Defense}</p>
            <p>Speed: {pokemon.base.Speed}</p>
            <p>Special Attack: {pokemon.base["Sp. Attack"]}</p>
            <p>Special Defense: {pokemon.base["Sp. Defense"]}</p>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}
