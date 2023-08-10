import { useEffect, useState } from "react";

import SettingsCategory from "../components/settings/SettingsCategory";
import { getCategories } from "../helpers/SettingsHelpers";
import { TPage } from "../interfaces/types";

type Props = {
  onChangePage: (newPage: TPage) => void;
};

const Settings: React.FC<Props> = ({ onChangePage }) => {
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [isCategoryError, setIsCategoryError] = useState(false);

  useEffect(() => {
    const categories = getCategories();

    setAvailableCategories(categories.map((c) => c.name));
    setCheckedCategories(
      categories.filter((c) => c.checked).map((c) => c.name)
    );
  }, []);

  const onBackClick = () => {
    onChangePage("game");
  };

  const onCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    if (checked) {
      setCheckedCategories((prev) => {
        const newCategories = [...prev, value];
        localStorage.setItem("categories", JSON.stringify(newCategories));
        return newCategories;
      });
    } else {
      setCheckedCategories((prev) => {
        if (prev.length < 2) {
          e.preventDefault();
          setIsCategoryError(true);
          setTimeout(() => {
            setIsCategoryError(false);
          }, 3000);
          return prev;
        }

        const newCategories = prev.filter((c) => c !== value);
        localStorage.setItem("categories", JSON.stringify(newCategories));
        return newCategories;
      });
    }
  };

  return (
    <div>
      <button onClick={onBackClick}>{"<-"}</button>
      <p>Settings</p>
      <ul>
        {availableCategories.map((category) => (
          <SettingsCategory
            key={category}
            category={category}
            checked={checkedCategories.includes(category)}
            onCategoryChange={onCategoryChange}
          />
        ))}
      </ul>
      {isCategoryError && <p>At least one category must be checked.</p>}
    </div>
  );
};

export default Settings;
