import { IItem } from "../interfaces/IItem";
import Item from "./Item";

type Props = {
  items: IItem[];
  correctIndex: number;
  pickedIndexes: number[];
  onItemClick: (index: number) => void;
};

const Game: React.FC<Props> = ({
  items,
  correctIndex,
  pickedIndexes,
  onItemClick,
}) => {
  return (
    <main className="flex-1 flex flex-col w-full items-center sm:flex-row">
      {items.map((item, index) => (
        <Item
          key={item.filename}
          item={item}
          index={index}
          isCorrect={correctIndex === index}
          isPicked={pickedIndexes.includes(index)}
          onItemClick={onItemClick}
        />
      ))}
    </main>
  );
};

export default Game;
