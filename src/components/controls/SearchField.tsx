import { ChangeEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchField = (props: SearchProps) => {
  const { onChange } = props;
  return (
    <div className="search-wrapper">
      <div className="search-field">
        <input
          className="search-field-input"
          type=""
          placeholder="Search for your character"
          aria-label="Search"
          onChange={onChange}
        ></input>
        <span className="search-field-span">
          <FontAwesomeIcon icon="search" />
        </span>
      </div>
    </div>
  );
};

export default SearchField;
