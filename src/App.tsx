import Header from "./components/Header";

import "./App.css";

import icon1 from "./assets/img/animal/ant.svg";
import icon2 from "./assets/img/animal/bat.svg";
import icon3 from "./assets/img/animal/bear.svg";

const App = () => {
  return (
    <div className="bg-cyan-700 w-screen h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <button className="bg-red-200 image h-1/3">
          <img src={icon1} alt="Image 1" width={50} height={50} />
        </button>
        <button className=" bg-red-400 image h-1/3">
          <img src={icon2} alt="Image 2" width={50} height={50} />
        </button>
        <button className=" bg-red-600 image h-1/3">
          <img src={icon3} alt="Image 3" width={50} height={50} />
        </button>
      </main>
    </div>
  );
};

export default App;
