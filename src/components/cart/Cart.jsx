import styles from "./styles.module.scss";
import { BiEuro } from "react-icons/bi";
import { AppCtx } from "@/store/context";
import { useContext } from "react";
import { cartActions } from "@/store/actions";

const Cart = () => {
  const { state, dispatch } = useContext(AppCtx);

  const clearCartHandler = () => {
    dispatch({
      type: cartActions.CLEAR_CART,
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.cart_container}>
        <h1>CART</h1>
        <form>
          <input type="text" placeholder="0,00" />
          <i>
            <BiEuro />
          </i>
        </form>

        <div className={styles.change_wrapper}>
          <div className={styles.crypto}>
            <div className={styles.label}>
              <p>Buy</p>
            </div>
            {state.cart.length == 0 ? (
              <div>
                <p>Your Coin</p>
              </div>
            ) : (
              <div className={styles.crypto_details}>
                <img src={state.cart.image} alt={state.cart.name} />
                <p>{state.cart.name}</p>
              </div>
            )}
          </div>

          <div className={styles.eur}>
            <div className={styles.label}>
              <p>EUR</p>
            </div>
            <div className={styles.eur_wallet}>
              <p>EUR Wallet</p>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <button onClick={() => clearCartHandler()}>CLEAR</button>
          <button>BUY</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
