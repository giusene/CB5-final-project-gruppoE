import styles from "./styles.module.scss";
import { AiOutlineStar } from "react-icons/ai";

const CoinsItem = ({ data }) => {
  const { image, name, symbol, market_cap_rank } = data;

  return (
    <div className={styles.main}>
      <div className={styles.icon_wrapper}>
        <img src={image} alt={name} />
        <div className={styles.coin_name}>
          <p className={styles.name}>{name}</p>
          <p className={styles.symbol}>{symbol}</p>
        </div>
      </div>
      <div className={styles.price}>
        <button>BUY</button>
        <i>
          <AiOutlineStar />
        </i>
        <p>{market_cap_rank} USD</p>
      </div>
    </div>
  );
};

export default CoinsItem;
