import { TItem } from "../interfaces/types";

import CorrectIcon from "../assets/correct.svg";
import WrongIcon from "../assets/wrong.svg";

import classes from "./Item.module.css";

type Props = {
  item: TItem;
  index: number;
  isCorrect: boolean;
  isPicked: boolean;
  onItemClick: (index: number) => void;
};

const Item: React.FC<Props> = ({
  item,
  index,
  isCorrect,
  isPicked,
  onItemClick,
}) => {
  const onClick = () => {
    onItemClick(index);
  };

  return (
    <div
      key={item.filename}
      className="h-1/3 p-4 flex justify-center sm:w-1/3 sm:h-auto sm:block"
    >
      <button
        className={`relative bg-cyan-600 h-full aspect-square border border-black rounded-lg hover:bg-cyan-500 sm:h-auto sm:w-full ${classes.item_btn}`}
        onClick={onClick}
      >
        <img
          src={`imgs/${item.categories[0]}/${item.filename}.svg`}
          alt={`Image ${index}`}
          draggable={false}
          className="absolute top-0 left-0 p-2 w-full aspect-square"
        />
        {isPicked && (
          <img
            src={isCorrect ? CorrectIcon : WrongIcon}
            alt={isCorrect ? "Correct icon" : "Wrong icon"}
            draggable={false}
            className="absolute top-0 left-0 p-2 w-full aspect-square"
          />
        )}
      </button>
    </div>
  );
};

export default Item;
