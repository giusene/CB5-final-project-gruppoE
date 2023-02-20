import styles from "./styles.module.scss";
import CoinsItem from "../coinsitem/CoinsItem";

const CoinsList = ({ coins, setCartModal }) => {
  return (
    <div className={styles.main}>
      <div className={styles.coins_container}>
        {coins.map((coin, index) => (
          <CoinsItem key={index} data={coin} setCartModal={setCartModal} />
        ))}
      </div>
    </div>
  );
};

export default CoinsList;
