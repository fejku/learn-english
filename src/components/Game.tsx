const Game = () => {
  return (
    <main className="flex-1 flex flex-col w-full items-center sm:flex-row">
      <div className="h-1/3 p-4 flex justify-center sm:w-1/3 sm:h-auto sm:block">
        <button className="bg-cyan-600 h-full aspect-square border border-black rounded-lg p-2 hover:bg-cyan-500 sm:h-auto sm:w-full">
          <img
            src={`imgs/animal/butterfly.svg`}
            alt="Image 1"
            draggable={false}
          />
        </button>
      </div>
      <div className="h-1/3 p-4 flex justify-center sm:w-1/3 sm:h-auto sm:block">
        <button className="bg-cyan-600 h-full aspect-square border border-black rounded-lg p-2 hover:bg-cyan-500 sm:h-auto sm:w-full">
          <img src={`imgs/animal/bat.svg`} alt="Image 2" draggable={false} />
        </button>
      </div>
      <div className="h-1/3 p-4 flex justify-center sm:w-1/3 sm:h-auto sm:block">
        <button className="bg-cyan-600 h-full aspect-square border border-black rounded-lg p-2 hover:bg-cyan-500 sm:h-auto sm:w-full">
          <img src={`imgs/animal/bear.svg`} alt="Image 3" draggable={false} />
        </button>
      </div>
    </main>
  );
};

export default Game;
