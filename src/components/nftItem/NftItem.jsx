import styles from "../nftItem/styles.module.scss";

const NftItem = ({ item, data, HandleModal }) => {
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
    <div className={styles.main} onClick={() =>HandleModal(data,item.cached_file_url)}>
      <img src={item.cached_file_url} alt={data.contract.name} />
      <div className={styles.details}>
        <h4>{data.contract.name}</h4>
        <p>#{item.token_id}</p>
      </div>
    </div>
  );
};

export default NftItem;
