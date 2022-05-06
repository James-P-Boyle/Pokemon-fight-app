/* import logo from './logo.svg'; */
import "./App.css";
import { Route, Routes } from "react-router-dom";

//COMPONENTS
import Navbar from "./components/Navbar";
import AllPokemon from "./components/AllPokemon";
import PokemonDetailed from "./components/PokemonDetailed";
import Cta from "./components/Cta";
import Game from "./components/Game";

function App() {
  return (
    <div className="font-mono mx-10 md:mx-20 ">
      <Navbar />
      <Game />
      <Routes>
        <Route path="/pokemon" element={<AllPokemon />} />
        <Route path="/pokemon/:id" element={<PokemonDetailed />} />
      </Routes>
      <Cta>text</Cta>
    </div>
  );
}

export default App;
