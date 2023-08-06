import { IItem } from "../interfaces/IItem";

import CorrectIcon from "../assets/correct.svg";
import WrongIcon from "../assets/wrong.svg";

type Props = {
  item: IItem;
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
        className="relative bg-cyan-600 h-full aspect-square border border-black rounded-lg p-2 hover:bg-cyan-500 sm:h-auto sm:w-full"
        onClick={onClick}
      >
        <img
          src={`imgs/animal/${item.filename}.svg`}
          alt={`Image ${index}`}
          draggable={false}
        />
        {isPicked && (
          <img
            src={isCorrect ? CorrectIcon : WrongIcon}
            alt={isCorrect ? "Correct icon" : "Wrong icon"}
            draggable={false}
            className="absolute top-0 left-0 aspect-square p-2"
          />
        )}
      </button>
    </div>
  );
};

export default Item;
