import { currencyFormat } from "@/utils/currencyFormat";
import { AiOutlineStar } from "react-icons/ai";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import styles from "./styles.module.scss";

const CoinsItem = ({ data }) => {
  console.log(data);
  const { image, name, symbol, current_price, price_change_percentage_24h } = data;

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
        <div>
          <p>{currencyFormat(current_price)}</p>
        </div>
        <div>
          <p
            className={`${styles.price_change} ${
              price_change_percentage_24h < 0 ? styles.price_down : styles.price_up
            }`}
          >
            {price_change_percentage_24h < 0 ? <FiTrendingDown /> : <FiTrendingUp />}
            <span> </span>
            {price_change_percentage_24h}
          </p>
        </div>
      </div>
      <div className={styles.button_wrapper}>
        <button>BUY</button>
        <i>
          <AiOutlineStar />
        </i>
      </div>
    </div>
  );
};

export default CoinsItem;
