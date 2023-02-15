import styles from "../nftItem/styles.module.scss";

const NftItem = ({ data, contract }) => {
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
    <div className={styles.main}>
      <h4> {contract.name}</h4>
      <img src={data.cached_file_url} alt={contract.name} />
      <p>#{data.token_id}</p>
    </div>
  );
};

export default NftItem;
