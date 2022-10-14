import { ChangeEventHandler } from "react";

interface SearchProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchField = (props: SearchProps) => {
  const { onChange } = props;
  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default SearchField;
