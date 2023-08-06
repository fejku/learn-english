import items from "../assets/items.json";
import { IItem } from "../interfaces/IItem";

const drawItems = () => {
  const result: IItem[] = [];

  const drawnIndexes: number[] = [];
  for (let i = 0; i < 3; i++) {
    let drawnIndex;
    do {
      drawnIndex = Math.floor(Math.random() * items.length);
    } while (drawnIndexes.includes(drawnIndex));
    drawnIndexes.push(drawnIndex);

    const newDrawnItem = items[drawnIndex];
    result.push(newDrawnItem);
  }
  return result;
};

const drawCorrectIndex = () => {
  return Math.floor(Math.random() * 3);
};

export const getFreshStates = () => {
  const newDrawnItems = drawItems();
  const newCorrectIndex = drawCorrectIndex();

  return { newDrawnItems, newCorrectIndex };
};

export const getItemByIndex = (drawnItems: IItem[], index: number) => {
  return drawnItems[index];
};
