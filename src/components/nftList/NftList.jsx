import NftItem from "../nftItem/NftItem";
import styles from "../nftList/styles.module.scss";

const NftList = ({ data }) => {
  // data = nfts + contract
  console.log(data);

  return (
    <div className={styles.main}>
      {data.nfts.map((item, index) => (
        <NftItem data={item} key={index} contract={data.contract} />
      ))}
    </div>
  );
};

export default NftList;
