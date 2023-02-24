import styles from "../../components/cryptocoins/styles.module.scss";
import Link from "next/link";
import Image from "next/image";

const CryptoCoins = ({ data }) => {
  const { coins } = data;

  return (
    <div className={styles.main}>
      <div>
        <h3>Trending</h3>
      </div>
      <ul>
        {coins.map((coin) => (
          <div className={styles.coin_row} key={coin.item.id}>
            <div className={styles.icon_wrapper}>
              <Image
                src={coin.item.large}
                alt={coin.item.name}
                width={100}
                height={100}
              />
              <div className={styles.coin_name}>
                <p>{coin.item.symbol}</p>
              </div>
            </div>
            <div className={styles.price}>
              <p>MCAP</p>
              <p>${coin.item.market_cap_rank},00</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CryptoCoins;
