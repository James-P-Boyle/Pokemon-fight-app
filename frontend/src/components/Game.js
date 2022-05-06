import { useEffect, useState } from "react";
import axios from "axios";

export default function Game() {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState();
  console.log(pokemon);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL)
      .then((res) => setPokemon(res))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted ${query}`);

    const poke = pokemon.data.filter((p) => p.name == query);
    console.log(poke);
  };

  return (
    <>
      <div className="container bg-yellow-300 border-8 border-blue-500 rounded-lg mx-auto p-2 flex items-center justify-center h-60">
        <div className="w-1/2">
          <h1>Choose Your Pokemon ...</h1>

          <form onSubmit={handleSubmit}>
            <input onChange={(e) => setQuery(e.target.value)} value={query} />
            <button type="submit" className="p-2 text-lg hover:text-slate-800">
              Find
            </button>
          </form>

          {}
        </div>
        <div className="w-1/2">
          <h1>You are fighting ...</h1>
        </div>
      </div>
    </>
  );
}
