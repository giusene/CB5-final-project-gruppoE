import CreditCard from "@/components/creditCard/CreditCard";
import UserCoins from "@/components/userCoins/UserCoins";
import styles from "../../styles/wallet.module.scss";
import Balance from "@/components/balance/Balance";
import Loader from "../../components/loader/Loader";
import { useState, useEffect } from "react";

function Wallet() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={styles.main}>
      <h3 className={styles.title}>Your Assets</h3>
      {loading === true && <Loader />}
      {loading === false && (
        <>
          <div className={styles.right_container}>
            <Balance />
            <CreditCard />
          </div>
          <div className={styles.left_container}>
            <div className={styles.coins}>
              <UserCoins />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Wallet;
