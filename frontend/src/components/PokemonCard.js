import { Link } from "react-router-dom";

export default function PokemonCard(props) {
  return (
    <div
      className=" 
      bg-red-700 hover:bg-red-600 
      pl-2 border py-5 rounded-lg  flex flex-col 
      justify-center items-center shadow-xl"
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        alt=""
        className="h-60 w-60"
      />
      <Link className="text-4xl cursor-pointer" to={`/pokemon/${props.id}`}>
        {props.name}
      </Link>

      {props.type.map((type, index) => (
        <p key={index} className="text-2xl">
          {type}
        </p>
      ))}
    </div>
  );
}
