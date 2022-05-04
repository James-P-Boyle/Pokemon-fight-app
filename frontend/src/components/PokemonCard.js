import { Link } from "react-router-dom";

export default function PokemonCard(props) {
  return (
    <div className="w-1/2 p-6 justify-center flex">
      <Link to={`/pokemon/${props.id}`}>{props.name}</Link>
    </div>
  );
}
