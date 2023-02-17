import styles from "./styles.module.scss";
import CoinsItem from "../coinsitem/CoinsItem";

const CoinsList = ({ coins, setSelectedCoin }) => {
  return (
    <div className={styles.main}>
      <div className={styles.coins_container}>
        {coins.map((coin, index) => (
          <CoinsItem
            key={index}
            data={coin}
            setSelectedCoin={setSelectedCoin}
          />
        ))}
      </div>
    </div>
  );
};

export default CoinsList;
