import styles from "../nftItem/styles.module.scss";
import Image from "next/image";

const NftItem = ({ item, data, HandleModal }) => {
  return (
    <div className={styles.main} onClick={() => HandleModal(data, item)}>
      <Image
        src={item.cached_file_url}
        alt={data.contract.name}
        width={500}
        height={500}
        priority
      />

      <div className={styles.id}>
        <h3>#{item.token_id}</h3>
      </div>
    </div>
  );
};

export default NftItem;
