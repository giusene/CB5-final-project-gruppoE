import Cart from "@/components/cart/Cart";
import CoinsList from "@/components/coinslist/CoinsList";
import styles from "@/styles/trade.module.scss";
import { useState } from "react";

const Trade = ({ coins }) => {
  const [selectedCoin, setSelectedCoin] = useState("");
  return (
    <div className={styles.main}>
      <CoinsList coins={coins} setSelectedCoin={setSelectedCoin} />
      <Cart selectedCoin={selectedCoin} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
  const coins = await res.json();
  console.log(coins);

  return {
    props: {
      coins,
    },
  };
}

export default Trade;
