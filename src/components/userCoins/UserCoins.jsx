import { AppCtx } from "@/store/context";
import { useContext, useEffect } from "react";
import { cartActions } from "@/store/actions";
import UserCoinsItem from "../userCoinsItem/UserCoinsItem";
import EmptyAssets from "../emptyAssets/EmptyAssets";
import styles from "./styles.module.scss";

const UserCoins = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useContext(AppCtx);

  useEffect(() => {
    Promise.all(
      currentUser.assets.coins.map((item) =>
        fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${item.coin.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        ).then((res) => res.json())
      )
    ).then((data) =>
      data.map((coin, index) => {
        dispatch({
          type: cartActions.UPDATE_PRICE,
          payload: {
            index: index,
            new_price: coin[0].current_price,
          },
        });
      })
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.favorite_list}>
        {currentUser.assets.coins.length === 0 && <EmptyAssets />}
        {currentUser.assets.coins.map((asset, index) => (
          <UserCoinsItem key={index} data={asset.coin} />
        ))}
      </div>
    </div>
  );
};

export default UserCoins;
