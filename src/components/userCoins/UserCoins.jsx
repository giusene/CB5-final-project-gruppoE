import { AppCtx } from "@/store/context";
import { useContext } from "react";
import CoinsItem from "../coinsitem/CoinsItem";
import styles from "./styles.module.scss";

const UserCoins = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useContext(AppCtx);

  return (
    <div className={styles.main}>
      <h3>Your Assets</h3>
      <div className={styles.favorite_list}>
        {currentUser.assets.coins.map((asset, index) => (
          <CoinsItem key={index} data={asset} />
        ))}
      </div>
    </div>
  );
};

export default UserCoins;
