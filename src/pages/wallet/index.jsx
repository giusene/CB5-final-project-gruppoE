import CreditCard from "@/components/creditCard/CreditCard";
import UserCoins from "@/components/userCoins/UserCoins";
import { AppCtx } from "@/store/context";
import { useContext, useEffect, useState } from "react";
import { currencyFormat } from "@/utils/currencyFormat";
import styles from "../../styles/wallet.module.scss";

function Wallet() {
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
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.right_container}>
        <div className={styles.balance}>
          <h2>Balance:</h2>
          <p>{currencyFormat(balance)}</p>
        </div>
        <CreditCard />
      </div>
      <div className={styles.left_container}>
        <div className={styles.coins}>
          <UserCoins />
        </div>
      </div>
    </div>
  );
}

export default Wallet;
