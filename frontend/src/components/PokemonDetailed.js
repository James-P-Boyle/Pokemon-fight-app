import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PokemonDetailed() {
  const [pokemon, setPokemon] = useState();

  const { id } = useParams();
  console.log(process.env);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}${id}`)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      {pokemon ? (
        <>
          {/*        <h1>Type: {pokemon.Type[0]}</h1> */}
          <h2>{pokemon.name.english}</h2>
          <h2>BASE</h2>
          <p>HP: {pokemon.base.HP}</p>
          <p>Attack: {pokemon.base.Attack}</p>
          <p>Defense: {pokemon.base.Defense}</p>
          <p>Speed: {pokemon.base.Speed}</p>
          <p>Special Attack: {pokemon.base["Sp. Attack"]}</p>
          <p>Special Defense: {pokemon.base["Sp. Defense"]}</p>
        </>
      ) : (
        "loading"
      )}
    </div>
  );
}
