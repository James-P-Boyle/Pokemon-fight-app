import { Link } from "react-router-dom";

export default function PokemonCard(props) {
  return (
    <div class="w-1/2 p-6 justify-center flex">
      <Link to={props.id}>{props.name}</Link>
    </div>
  );
}
ç