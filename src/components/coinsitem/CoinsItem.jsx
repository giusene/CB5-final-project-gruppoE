import styles from "./styles.module.scss";

const CoinsItem = ({ data }) => {
  const { image, name, symbol, market_cap_rank } = data;

  return (
    <div className={styles.main}>
      <div className={styles.icon_wrapper}>
        <img src={image} alt={name} />
        <div className={styles.coin_name}>
          <h4>{name}</h4>
          <p>{symbol}</p>
        </div>
      </div>
      <div className={styles.price}>
        <p>{market_cap_rank} USD</p>
      </div>
    </div>
  );
};

export default CoinsItem;
