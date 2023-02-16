import styles from "./styles.module.scss";

const Cart = () => {
  return (
    <div className={styles.main}>
      <div className={styles.cart_container}>
        <p> Your Cart </p>

        <div className={styles.cart_body}>
          <div className={styles.balance}>
            <input type="number" name="balance" placeholder="0" required />
            <p>$</p>
          </div>

          <div className={styles.products}>
            <p> CRYPTO </p>
            <p> PRICE </p>
          </div>

          <button type="submit"> BUY </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
