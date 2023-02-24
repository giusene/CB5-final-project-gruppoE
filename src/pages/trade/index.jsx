import Cart from "@/components/cart/Cart";
import CoinsList from "@/components/coinslist/CoinsList";
import SearchBar from "@/components/searchbar/SearchBar";
import { MdSearchOff } from "react-icons/md";
import styles from "@/styles/trade.module.scss";
import { useState, useEffect, useContext } from "react";
import { AppCtx } from "@/store/context";
import Loader from "@/components/loader/Loader";

const Trade = ({ coins }) => {
  const [filteredCoins, setFilteredCoins] = useState(coins);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const {
    state: { currentUser, showModal },
    dispatch,
  } = useContext(AppCtx);

  const filterHandler = () => {
    if (searchValue === "") {
      setFilteredCoins(coins);
    } else {
      const updatedFilter = coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchValue)
      );
      setFilteredCoins(updatedFilter);
    }
  };

  useEffect(() => {
    filterHandler();
    // eslint-disable-next-line
  }, [searchValue]);

  return (
    <div className={styles.main}>
      {loading === true && <Loader />}
      {loading === false && (
        <>
          <div className={styles.title}>
            <h3>Coins</h3>
          </div>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            filterHandler={filterHandler}
          />
          {filteredCoins.length > 0 ? (
            <CoinsList coins={filteredCoins} />
          ) : (
            <div className={styles.notfound}>
              <i>
                <MdSearchOff />
              </i>

              <div className={styles.text}>
                <p>No results found for "{searchValue}"</p>
                <h3>PLEASE TRY AGAIN</h3>
              </div>
            </div>
          )}
          {showModal && <Cart coins={coins} />}
        </>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
  const coins = await res.json();

  return {
    props: {
      coins,
    },
  };
}

export default Trade;
