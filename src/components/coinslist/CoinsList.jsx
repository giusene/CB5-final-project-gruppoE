import styles from "./styles.module.scss";
import CoinsItem from "../coinsitem/CoinsItem";

const CoinsList = ({ coins }) => {
  return (
    <div className={styles.main}>
      {coins.map((coin, index) => (
        <CoinsItem key={index} data={coin} />
      ))}
    </div>
  );
};

export default CoinsList;
