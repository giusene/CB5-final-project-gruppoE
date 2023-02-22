import CreditCard from "@/components/creditCard/CreditCard";
import UserCoins from "@/components/userCoins/UserCoins";
import styles from "../../styles/wallet.module.scss";
import Balance from "@/components/balance/Balance";

function Wallet() {
  return (
    <div className={styles.main}>
      <div className={styles.right_container}>
        <Balance />

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
