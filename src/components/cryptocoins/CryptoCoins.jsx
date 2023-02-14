import styles from "../../components/cryptocoins/styles.module.scss";

const CryptoCoins = ({ data }) => {
  const { coins } = data;

  return (
    <div className={styles.main}>
      <ul>
        {coins.map((coin) => (
          <div className={styles.coin_row} key={coin.item.id}>
            <div className={styles.icon_wrapper}>
              <img src={coin.item.large} alt={coin.item.name} />
              <div className={styles.coin_name}>
                <h3> {coin.item.name}</h3>
                <p>{coin.item.symbol}</p>
              </div>
            </div>
            <div className={styles.price}>
              <p>{coin.item.market_cap_rank} USD</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CryptoCoins;
