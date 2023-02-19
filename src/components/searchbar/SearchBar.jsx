import styles from "./styles.module.scss";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className={styles.main}>
      <h3>Search coins</h3>
      <form>
        <input type="text" placeholder="Search coin..." />
        <button>
          <BiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
