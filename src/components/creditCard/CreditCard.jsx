import Image from "next/image";
import circuitPic from "/public/images/mastercard.png";
import chipCard from "/public/images/chip.png";
import mapCard from "/public/images/map.png";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { AppCtx } from "@/store/context";

const CreditCard = () => {
  const { state } = useContext(AppCtx);

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.card_inner}>
          <div className={styles.card_front}>
            <Image src={mapCard} alt="world-map" className={styles.map_card} />
            <div className={styles.row}>
              <Image src={chipCard} alt="card-chip" />
              <Image src={circuitPic} alt="bank-circuit" />
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
              <p>
                {state.currentUser.name} {state.currentUser.surname}
              </p>
              <p>SENEX❖</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
