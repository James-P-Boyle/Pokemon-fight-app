export default function Game() {
  return (
    <>
      <div className="container bg-yellow-300 border-8 border-blue-500 rounded-lg mx-auto p-2 flex items-center justify-center h-60">
        <div className="w-1/2">
          <h1>Choose Your Pokemon ...</h1>
          <input type="text" />
          <button className="p-2 text-lg hover:text-slate-800">Find</button>
        </div>
        <div className="w-1/2">
          <h1>You are fighting ...</h1>
        </div>
      </div>
    </>
  );
}
