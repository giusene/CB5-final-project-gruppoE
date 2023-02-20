import Cart from "@/components/cart/Cart";
import CoinsList from "@/components/coinslist/CoinsList";
import SearchBar from "@/components/searchbar/SearchBar";
import styles from "@/styles/trade.module.scss";
import { useState, useEffect } from "react";

const Trade = ({ coins }) => {
  const [filteredCoins, setFilteredCoins] = useState(coins);
  const [searchValue, setSearchValue] = useState("");
  const [cartModal, setCartModal] = useState(false);

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
  }, [searchValue]);

  return (
    <div className={styles.main}>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filterHandler={filterHandler}
      />
      {filteredCoins.length > 0 ? (
        <CoinsList coins={filteredCoins} setCartModal={setCartModal} />
      ) : (
        <div className={styles.notfound}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3670/3670605.png"
            alt="notfound"
          />

          <div className={styles.text}>
            <p>No results found for "{searchValue}"...</p>
            <p>PLEASE TRY AGAIN</p>
          </div>
        </div>
      )}
      {cartModal && <Cart setCartModal={setCartModal} />}
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
