import styles from "./styles.module.scss";
import { BiDollar } from "react-icons/bi";
import { AppCtx } from "@/store/context";
import { useContext, useState } from "react";
import { cartActions } from "@/store/actions";
import removeDecimalPlaces from "@/utils/removeDecimal";
import Image from "next/image";

const Cart = ({ setCartModal }) => {
  const {
    state: { currentUser },
    dispatch,
  } = useContext(AppCtx);
  const [inputValue, setInputValue] = useState(0);
  const [totalCoin, setTotalCoin] = useState(0);

  const clearCartHandler = () => {
    dispatch({
      type: cartActions.CLEAR_CART,
    });
    setTotalCoin(0);
  };

  const inputHandler = (e) => {
    const input = e.target.value;
    const pattern = /^[0-9]*$/;
    const absValue = Math.abs(parseInt(input));
    if (e.target.value === "") {
      setTotalCoin(0);
    } else {
      if (!pattern.test(input)) {
        setInputValue("");
      } else {
        setInputValue(absValue);
        setTotalCoin(removeDecimalPlaces(absValue / currentUser.cart[0].current_price));
      }
    }
  };

  // BUY COIN
  const buyHandler = (e) => {
    dispatch({
      type: cartActions.BUY_COIN,
      payload: {
        coin: { ...currentUser.cart[0], qty: totalCoin },
      },
    });
    setCartModal(false);
  };

  const closeModal = () => {
    setCartModal(false);
    clearCartHandler();
  };

  return (
    <div className={styles.main}>
      <div className={styles.cart_container}>
        <h2>CART</h2>
        <button className={styles.close_cart} onClick={() => closeModal()}>
          X
        </button>

        {currentUser.cart.length === 0 ? (
          <p>Cart is empty!</p>
        ) : (
          <>
            <form>
              <input onChange={inputHandler} type="text" pattern="[0-9]*" placeholder="0,00" />
              <i>
                <BiDollar />
              </i>
            </form>

            <div className={styles.change_wrapper}>
              <div className={styles.crypto}>
                <div className={styles.label}>
                  <p>Buy</p>
                </div>

                <div className={styles.crypto_details}>
                  <Image
                    src={currentUser.cart[0].image}
                    alt={currentUser.cart[0].name}
                    width={100}
                    height={100}
                  />
                  <p>{currentUser.cart[0].name}</p>
                </div>
              </div>

              <div className={styles.usd}>
                <div className={styles.label}>
                  <p>{currentUser.cart[0].symbol && currentUser.cart[0].symbol.toUpperCase()}</p>
                </div>
                <div className={styles.usd_wallet}>
                  <p>{totalCoin}</p>
                </div>
              </div>
            </div>
            <div className={styles.btns}>
              <button onClick={() => clearCartHandler()}>CLEAR</button>
              <button onClick={() => buyHandler()}>BUY</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
