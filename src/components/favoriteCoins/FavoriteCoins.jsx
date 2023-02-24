import { AppCtx } from "@/store/context";
import { useContext } from "react";
import CoinsItem from "../coinsitem/CoinsItem";
import EmptyAssets from "../emptyAssets/EmptyAssets";
import styles from "./styles.module.scss";

const FavoriteCoins = ({ setCartModal }) => {
  const {
    state: { currentUser },
    dispatch,
  } = useContext(AppCtx);
  // console.log(favorite);

  return (
    <div className={styles.main}>
      <h3>Watchlist</h3>
      <div className={styles.favorite_list}>
        {currentUser.favorite.length === 0 && <EmptyAssets />}
        {currentUser.favorite.map((coin, index) => (
          <CoinsItem key={index} data={coin} setCartModal={setCartModal} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteCoins;
