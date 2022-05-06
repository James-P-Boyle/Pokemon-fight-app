import { useNavigate } from "react-router-dom";

export default function PokemonCard(props) {
  const navigate = useNavigate();
  return (
    <div
      className=" 
      bg-red-700 hover:bg-red-600 
      pl-2 border py-5 rounded-lg  flex flex-col 
      justify-center items-center shadow-xl cursor-pointer"
      onClick={() => {
        navigate(`/pokemon/${props.id}`);
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        alt=""
        className="h-60 w-60"
      />
      <h1 className="text-4xl">{props.name}</h1>

      {props.type.map((type, index) => (
        <p key={index} className="text-2xl">
          {type}
        </p>
      ))}
    </div>
  );
}
