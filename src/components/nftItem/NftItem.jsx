import styles from "../nftItem/styles.module.scss";
import Image from "next/image";

const NftItem = ({ item, data, HandleModal }) => {
  console.log(data);
  /* 
  -- NFT DETAILS --
name: contract.name 
image: data.cached_file_url
description: contract.description
rarity: data.rarity.rank / collectionSize: data.rarity.collection_size
mint-date: data.mint_date
tokenID: data.token_id
*/
  return (
    <div className={styles.main} onClick={() => HandleModal(data, item)}>
      <Image
        src={item.cached_file_url}
        alt={data.contract.name}
        width={500}
        height={500}
      />

      <div className={styles.details}>
        <div className={styles.id}>#{item.token_id}</div>
      </div>
    </div>
  );
};

export default NftItem;
