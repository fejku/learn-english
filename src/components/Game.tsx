import icon1 from "../assets/img/animal/butterfly.svg";
import icon2 from "../assets/img/animal/bat.svg";
import icon3 from "../assets/img/animal/bear.svg";

const Game = () => {
  return (
    <main className="flex-1 flex flex-col w-full items-center sm:flex-row">
      <div className="h-1/3 p-4 flex justify-center sm:w-1/3 sm:h-auto sm:block">
        <button className="bg-cyan-600 h-full aspect-square border border-black rounded-lg p-2 hover:bg-cyan-500 sm:h-auto sm:w-full">
          <img src={icon1} alt="Image 1" draggable={false} />
        </button>
      </div>
      <div className="h-1/3 p-4 flex justify-center sm:w-1/3 sm:h-auto sm:block">
        <button className="bg-cyan-600 h-full aspect-square border border-black rounded-lg p-2 hover:bg-cyan-500 sm:h-auto sm:w-full">
          <img src={icon2} alt="Image 2" draggable={false} />
        </button>
      </div>
      <div className="h-1/3 p-4 flex justify-center sm:w-1/3 sm:h-auto sm:block">
        <button className="bg-cyan-600 h-full aspect-square border border-black rounded-lg p-2 hover:bg-cyan-500 sm:h-auto sm:w-full">
          <img src={icon3} alt="Image 3" draggable={false} />
        </button>
      </div>
    </main>
  );
};

export default Game;
