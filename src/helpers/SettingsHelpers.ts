import items from "../assets/items.json";
import { TCategorie } from "../interfaces/types";

const getSavesCategories = () => {
  const result = <string[]>[];

  const categoriesStorage = localStorage.getItem("categories");
  if (categoriesStorage === null) {
    result.push("animal");

    localStorage.setItem("categories", JSON.stringify(result));
  } else {
    const savedCategoriesArr = JSON.parse(categoriesStorage);
    for (const categorie of savedCategoriesArr) {
      result.push(categorie);
    }
  }
  return result;
};

export const getCategories = () => {
  const result = <TCategorie[]>[];

  const savedCategories = getSavesCategories();

  for (const item of items) {
    for (const categorie of item.categories) {
      const alreadyExist = result.find((r) => r.name === categorie);
      if (!alreadyExist) {
        result.push({
          name: categorie,
          checked: savedCategories.includes(categorie),
        });
      }
    }
  }

  return result;
};
