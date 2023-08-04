import Header from "./components/Header";

import icon1 from "./assets/img/animal/ant.svg";
import icon2 from "./assets/img/animal/bat.svg";
import icon3 from "./assets/img/animal/bear.svg";

const App = () => {
  return (
    <div className="bg-cyan-700 w-screen h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <div className="h-1/3 p-4 flex justify-center">
          <button className="bg-cyan-600 h-full aspect-square border border-black rounded-lg p-2 hover:bg-cyan-500">
            <img src={icon1} alt="Image 1" draggable={false} />
          </button>
        </div>
        <div className="h-1/3 p-4 flex justify-center">
          <button className="bg-cyan-600 h-full aspect-square border border-black rounded-lg p-2 hover:bg-cyan-500">
            <img src={icon2} alt="Image 2" draggable={false} />
          </button>
        </div>
        <div className="h-1/3 p-4 flex justify-center">
          <button className="bg-cyan-600 h-full aspect-square border border-black rounded-lg p-2 hover:bg-cyan-500">
            <img src={icon3} alt="Image 3" draggable={false} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
