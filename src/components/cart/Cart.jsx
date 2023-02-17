import styles from "./styles.module.scss";
import { BiEuro } from "react-icons/bi";
import { AppCtx } from "@/store/context";
import { useContext, useState } from "react";
import { cartActions } from "@/store/actions";
import { currencyFormat } from "@/utils/currencyFormat";

const Cart = () => {
  const { state, dispatch } = useContext(AppCtx);
  const [inputValue, setInputValue] = useState(0);
  const [totalCoin, setTotalCoin] = useState(0);

  const clearCartHandler = () => {
    dispatch({
      type: cartActions.CLEAR_CART,
    });
    setTotalCoin(0);
  };

  const inputHandler = (e) => {
    setInputValue(parseInt(e.target.value));
    setTotalCoin(parseInt(e.target.value) / state.cart.current_price);
  };

  return (
    <div className={styles.main}>
      <div className={styles.cart_container}>
        <h1>CART</h1>

        {state.cart.length === 0 ? (
          <p>Cart is empty!</p>
        ) : (
          <>
            <form>
              <input onChange={inputHandler} type="text" placeholder="0,00" />
              <i>
                <BiEuro />
              </i>
            </form>

            <div className={styles.change_wrapper}>
              <div className={styles.crypto}>
                <div className={styles.label}>
                  <p>Buy</p>
                </div>

                <div className={styles.crypto_details}>
                  <img src={state.cart.image} alt={state.cart.name} />
                  <p>{state.cart.name}</p>
                </div>
              </div>

              <div className={styles.eur}>
                <div className={styles.label}>
                  <p>{state.cart.symbol && state.cart.symbol.toUpperCase()}</p>
                </div>
                <div className={styles.eur_wallet}>
                  <p>{totalCoin}</p>
                </div>
              </div>
            </div>
            <div className={styles.btns}>
              <button onClick={() => clearCartHandler()}>CLEAR</button>
              <button>BUY</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
