import { useNavigate } from "react-router-dom";

export default function Cta({ children }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-yellow-400 hover:bg-yellow-300 hover:cursor-pointer border-8 border-blue-500 w-1/4 p-5 flex flex-col items-center justify-center m-4
      rounded-lg mx-auto
      "
        onClick={() => {
          navigate("/pokemon");
        }}
      >
        <img src="pokeball.png" alt="" className="h-20 w-20" />
        <button className="">{children}</button>
      </div>
    </>
  );
}
