type Props = {
  category: string;
  checked: boolean;
  onCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SettingsCategory: React.FC<Props> = ({
  category,
  checked,
  onCategoryChange,
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCategoryChange(e);
  };

  return (
    <li>
      <input
        type="checkbox"
        id={`category-${category}`}
        name="category"
        value={category}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={`category-${category}`}>{category}</label>
    </li>
  );
};

export default SettingsCategory;
