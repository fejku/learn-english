export type TItem = {
  filename: string;
  categories: string[];
  pl: string;
  en: string;
};

export type TPage = "game" | "settings";

export type TCategorie = {
  name: string;
  checked: boolean;
};

export type TSettings = {
  categories: TCategorie[];
};
