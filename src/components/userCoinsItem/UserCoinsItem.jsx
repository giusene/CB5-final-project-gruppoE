import { currencyFormat } from "@/utils/currencyFormat";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { RiCopperCoinLine } from "react-icons/ri";
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
      <Link href={`/crypto/${id}`}>
        <div className={styles.icon_wrapper}>
          <Image src={image} alt={name} width={100} height={100} />
          <div className={styles.coin_name}>
            <p className={styles.name}>{name}</p>

            <p className={styles.symbol}>{symbol}</p>
          </div>
        </div>
        <div className={styles.price}>
          <div>
            <p className={styles.current_price}>Coin value: {currencyFormat(current_price)}</p>
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
          <div className={styles.owned}>
            <p>
              Owned <RiCopperCoinLine /> {qty}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCoinsItem;
