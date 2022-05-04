/* import logo from './logo.svg'; */
import "./App.css";
import { Route, Routes } from "react-router-dom";
//COMPONENTS
import Navbar from "./components/Navbar";
import AllPokemon from "./components/AllPokemon";
import PokemonDetailed from "./components/PokemonDetailed";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/pokemon" element={<AllPokemon />} />
        <Route path="/pokemon/:id" element={<PokemonDetailed />} />
      </Routes>
    </div>
  );
}

export default App;
