import { useEffect, useState } from "react";

import Game from "./components/Game";
import Header from "./components/Header";
import {
  getFreshStates,
  getItemByIndex,
  speak,
} from "./components/GameHelpers";
import { IItem } from "./interfaces/IItem";

const App = () => {
  const [drawnItems, setDrawnItems] = useState<IItem[]>([]);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [pickedIndexes, setPickedIndexes] = useState<number[]>([]);

  useEffect(() => {
    newGame();
  }, []);

  const onItemClick = (index: number) => {
    const newPickedIndexes = [...pickedIndexes, index];
    setPickedIndexes(newPickedIndexes);

    if (index === correctIndex) {
      setTimeout(() => {
        newGame();
      }, 500);
    }
  };

  const newGame = () => {
    const { newDrawnItems, newCorrectIndex } = getFreshStates();

    setPickedIndexes([]);
    setDrawnItems(newDrawnItems);
    setCorrectIndex(newCorrectIndex);

    const correctItem = getItemByIndex(newDrawnItems, newCorrectIndex);
    speak("en", correctItem);
  };

  const correctItem = getItemByIndex(drawnItems, correctIndex);

  return (
    <div className="bg-cyan-700 w-screen h-screen flex flex-col">
      <Header item={correctItem} />
      <Game
        items={drawnItems}
        correctIndex={correctIndex}
        pickedIndexes={pickedIndexes}
        onItemClick={onItemClick}
      />
    </div>
  );
};

export default App;
