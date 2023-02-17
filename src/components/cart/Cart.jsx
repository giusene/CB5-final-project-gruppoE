import styles from "./styles.module.scss";
import { BiEuro } from "react-icons/bi";

const Cart = () => {
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
            <span>Buy</span>
            <span>Crypto</span>
          </div>
          <div className={styles.change}>
            <span>Pay with</span>
            <span>EUR Wallet</span>
          </div>
        </div>
        <div className={styles.btns}>
          <div>
            <button>REMOVE CRYPTO</button>
            <button>CLEAR CART</button>
          </div>

          <button className={styles.buy_btn}>BUY</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
