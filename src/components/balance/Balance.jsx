import { AppCtx } from "@/store/context";
import { useContext, useEffect, useState } from "react";
import { currencyFormat } from "@/utils/currencyFormat";
import styles from "./styles.module.scss";

const Balance = ({ variant }) => {
  const [balance, setBalance] = useState(0);

  const {
    state: { currentUser },
    dispatch,
  } = useContext(AppCtx);

  /* MAP COINS */
  useEffect(() => {
    let total = 0;
    currentUser.assets.coins.map((coin) => {
      const multi = coin.coin.qty * coin.coin.current_price;
      total += multi;
    });
    setBalance(total);
  }, [currentUser]);

  return (
    <div
      className={`${styles.main} ${
        variant === "variant_desktop" ? styles.variant_desktop : ""
      }`}
    >
      <div className={styles.balance}>
        <h2>Balance</h2>
        <h3>{currencyFormat(balance)}</h3>
      </div>
    </div>
  );
};

export default Balance;
