import Image from "next/image";
import circuitPic from "/public/images/mastercard.png";
import chipCard from "/public/images/chip.png";
import mapCard from "/public/images/map.png";
import styles from "./styles.module.scss";

const CreditCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.card_inner}>
          <div className={styles.card_front}>
            <Image src={mapCard} className={styles.map_card} />
            <div className={styles.row}>
              <Image src={chipCard} />
              <Image src={circuitPic} />
            </div>
            <div className={styles.card_number}>
              <p>5322</p>
              <p>2152</p>
              <p>8535</p>
              <p>6420</p>
            </div>

            <div className={styles.card_holder}>
              <p>CARD HOLDER</p>
              <p>DeFi</p>
            </div>

            <div className={styles.card_name}>
              <p>MARCO RIVERA</p>
              <p>SENEX❖</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
