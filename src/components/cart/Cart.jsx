import styles from "./styles.module.scss";
import { BiEuro } from "react-icons/bi";

const Cart = ({ selectedCoin }) => {
  const { image, name } = selectedCoin;
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
            {!selectedCoin ? (
              <div>
                <p>Your Coin</p>
              </div>
            ) : (
              <div className={styles.crypto_details}>
                <img src={image} alt={name} />
                <p>{name}</p>
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
