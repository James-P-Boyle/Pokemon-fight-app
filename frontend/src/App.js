/* import logo from './logo.svg'; */
import "./App.css";
import { Route, Routes } from "react-router-dom";

//COMPONENTS
import Navbar from "./components/Navbar";
import AllPokemon from "./components/AllPokemon";
import PokemonById from "./components/PokemonById";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="w-1/2"></div>
      <Routes>
        <Route path="/pokemon" element={<AllPokemon />} />
        <Route path="/pokemon/:id" element={<PokemonById />} />
      </Routes>
    </div>
  );
}

export default App;
