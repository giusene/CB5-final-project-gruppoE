import styles from "./styles.module.scss";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ searchValue, setSearchValue }) => {
  const inputHandler = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.main}>
      <form>
        <input
          onChange={(e) => inputHandler(e)}
          value={searchValue}
          type="text"
          placeholder="Search coin..."
        />
        <button>
          <BiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
