import Link from "next/link";
import { IoIosRocket } from "react-icons/io";
import styles from "./styles.module.scss";

function EmptyAssets() {
  return (
    <div className={styles.main}>
      <h3>no items yet</h3>
      <button>
        <Link href="/trade">START PLAYING</Link>
        <i>
          <IoIosRocket />
        </i>
      </button>
    </div>
  );
}

export default EmptyAssets;
