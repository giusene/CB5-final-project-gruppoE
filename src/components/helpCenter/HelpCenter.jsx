import { SiMinutemailer } from "react-icons/si";
import styles from "./styles.module.scss";

const HelpCenter = ({ variant }) => {
  return (
    <div
      className={`${styles.main} ${variant === "variant_desktop" ? styles.variant_desktop : ""}`}
    >
      <div className={styles.icon}>
        <p>?</p>
      </div>

      <div className={styles.text}>
        <h2>Help Center</h2>
        <p>Having trouble in CryptoWallet? Please contact us for more questions</p>
      </div>
      <a className={styles.email} href="mailto: help@cryptowallet.com">
        Email Us! <SiMinutemailer />
      </a>
    </div>
  );
};

export default HelpCenter;
