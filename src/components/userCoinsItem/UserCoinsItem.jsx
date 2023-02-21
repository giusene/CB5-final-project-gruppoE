import { currencyFormat } from "@/utils/currencyFormat";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { AppCtx } from "@/store/context";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

const UserCoinsItem = ({ data }) => {
  const {
    state: { currentUser },
    dispatch,
  } = useContext(AppCtx);

  const { id, image, name, symbol, current_price, price_change_percentage_24h, qty } = data;

  return (
    <div className={styles.main}>
      <div className={styles.icon_wrapper}>
        <Image src={image} alt={name} width={100} height={100} />
        <div className={styles.coin_name}>
          <Link href={`/crypto/${id}`}>
            <p className={styles.name}>{name}</p>
          </Link>
          <p className={styles.symbol}>{symbol}</p>
        </div>
      </div>
      <div className={styles.price}>
        <div>
          <p>Coin value: {currencyFormat(current_price)}</p>
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
        <div>Owned: {qty}</div>
      </div>
    </div>
  );
};

export default UserCoinsItem;
