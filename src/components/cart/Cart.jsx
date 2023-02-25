import styles from "./styles.module.scss";
import { BiDollar } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AppCtx } from "@/store/context";
import { useContext, useState } from "react";
import { cartActions } from "@/store/actions";
import removeDecimalPlaces from "@/utils/removeDecimal";
import Image from "next/image";

const Cart = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useContext(AppCtx);
  const [inputValue, setInputValue] = useState(0);
  const [totalCoin, setTotalCoin] = useState(0);

  const currentMessage = {
    operation: "",
    message: "",
  };

  const [cartText, setCartText] = useState(currentMessage);

  const clearCartHandler = () => {
    dispatch({
      type: cartActions.CLEAR_CART,
    });
    setTotalCoin(0);
    setCartText({ operation: "Cleared!", message: "Cart will now close." });

    setTimeout(() => {
      dispatch({
        type: cartActions.MODAL_TIMER,
      });
    }, 1_500);
  };

  const closeCartHandler = () => {
    dispatch({
      type: cartActions.MODAL_TIMER,
    });
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
        setTotalCoin(
          removeDecimalPlaces(absValue / currentUser.cart[0].current_price)
        );
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
    setCartText({
      operation: "Transaction completed!",
      message: "Check your wallet.",
    });
    setTimeout(() => {
      dispatch({
        type: cartActions.MODAL_TIMER,
      });
    }, 1_500);
  };

  return (
    <div className={styles.main}>
      <div className={styles.cart_container}>
        <i className={styles.closecart} onClick={closeCartHandler}>
          <AiOutlineCloseCircle />
        </i>
        {currentUser.cart.length === 0 ? (
          <div className={styles.timeout}>
            <h3>{cartText.operation}</h3>
            <p className={styles.cart_empty}>{cartText.message}</p>
          </div>
        ) : (
          <>
            <form>
              <input
                onChange={inputHandler}
                type="text"
                pattern="[0-9]*"
                placeholder="0,00"
              />
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
                  <p>
                    {currentUser.cart[0].symbol &&
                      currentUser.cart[0].symbol.toUpperCase()}
                  </p>
                </div>
                <div className={styles.usd_wallet}>
                  <p>{totalCoin}</p>
                </div>
              </div>
            </div>
            <div className={styles.btns}>
              <button onClick={() => clearCartHandler()}>CLEAR</button>
              <button
                className={
                  (inputValue == 0 || !inputValue) && `${styles.disabled}`
                }
                disabled={inputValue == 0 || !inputValue}
                onClick={() => buyHandler()}
              >
                BUY
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
