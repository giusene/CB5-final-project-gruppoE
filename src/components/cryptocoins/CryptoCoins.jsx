import styles from "../../components/cryptocoins/styles.module.scss";
import Link from "next/link";

const CryptoCoins = ({ data }) => {
  const { coins } = data;

  return (
    <div className={styles.main}>
      <ul>
        {coins.map((coin) => (
          <div className={styles.coin_row} key={coin.item.id}>
            <div className={styles.icon_wrapper}>
              <img src={coin.item.large} alt={coin.item.name} />
              <Link href={`/crypto/${coin.item.id}`}>
                <div className={styles.coin_name}>
                  <p className={styles.name}>{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </Link>
            </div>
            <div className={styles.price}>
              <p>${coin.item.market_cap_rank},00</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CryptoCoins;
