import { TItem } from "../interfaces/types";
import { getSavesCategories } from "./SettingsHelpers";

import items from "../assets/items.json";

const drawItems = () => {
  const result: TItem[] = [];

  const categories = getSavesCategories();
  const filteredItems = items.filter((item) =>
    item.categories.some((category) => categories.includes(category))
  );

  const drawnIndexes: number[] = [];
  for (let i = 0; i < 3; i++) {
    let drawnIndex;
    do {
      drawnIndex = Math.floor(Math.random() * filteredItems.length);
    } while (drawnIndexes.includes(drawnIndex));
    drawnIndexes.push(drawnIndex);

    const newDrawnItem = filteredItems[drawnIndex];
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

export const getItemByIndex = (drawnItems: TItem[], index: number) => {
  return drawnItems[index];
};

const speakConstant = (language: "en" | "pl") => {
  return language === "en" ? "Find the" : "Znajdź";
};

export const speak = (language: "en" | "pl", item: TItem) => {
  // Stop previous speak, prevents queue after fast clicking
  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance();
  speech.lang = language;
  speech.text = `${speakConstant(language)} ${item[language]}`;
  speech.rate = 0.75; // Prędkość mówienia
  // speech.pitch = 2;

  window.speechSynthesis.speak(speech);
};
