import { AppCtx } from "@/store/context";
import { useContext } from "react";
import CoinsItem from "../coinsitem/CoinsItem";
import styles from "./styles.module.scss";

const FavoriteCoins = () => {
  const {
    state: { favorite },
    dispatch,
  } = useContext(AppCtx);
  console.log(favorite);

  return (
    <div className={styles.main}>
      <h3>Watchlist</h3>
      {favorite.map((coin, index) => (
        <CoinsItem key={index} data={coin} />
      ))}
    </div>
  );
};

export default FavoriteCoins;
