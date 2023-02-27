import { useContext } from "react";
import { AppCtx } from "@/store/context";
import { tradingActions } from "@/store/actions";
import styles from "./styles.module.scss";

function SellCoins({ id }) {
  const { state, dispatch } = useContext(AppCtx);
  const { coins } = state.currentUser.assets;
  const sellCoinsHandler = (itemId) => {
    dispatch({ type: tradingActions.SELL_COIN, payload: itemId });
  };

  return (
    <div className={styles.main}>
      <button onClick={() => sellCoinsHandler(id)}>Sell</button>
    </div>
  );
}

export default SellCoins;
