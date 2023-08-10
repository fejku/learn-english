import { useEffect, useState } from "react";

import { TItem, TPage } from "../interfaces/types";
import Header from "../components/Header";
import Items from "../components/Items";
import { getFreshStates, getItemByIndex, speak } from "../helpers/GameHelpers";

type Props = {
  onChangePage: (page: TPage) => void;
};

const Game: React.FC<Props> = ({ onChangePage }) => {
  const [drawnItems, setDrawnItems] = useState<TItem[]>([]);
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
      <Header item={correctItem} onChangePage={onChangePage} />
      <Items
        items={drawnItems}
        correctIndex={correctIndex}
        pickedIndexes={pickedIndexes}
        onItemClick={onItemClick}
      />
    </div>
  );
};

export default Game;
