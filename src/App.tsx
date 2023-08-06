import Game from "./components/Game";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-cyan-700 w-screen h-screen flex flex-col">
      <Header />
      <Game />
    </div>
  );
};

export default App;
