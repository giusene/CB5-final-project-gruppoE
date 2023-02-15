import { useState, useEffect } from "react";
import styles from "../nft-list/styles.module.scss";

const NftList = ({ data }) => {
  /*  const [nftList, setNftList] = useState([]);

  const GET = async (resource) => {
    const res = await fetch(`https://api.coingecko.com/api/v3/nfts/${resource}`);
    const data = await res.json();

    return data;
  }; */

  /*   useEffect(() => {
    data.map((item) => GET(item.id).then((nft) => console.log(nft)));
  }, []); */

  return (
    <div className={styles.main}>
      {/*   <ul>
        <li>
          <h3> {nftList.name} </h3>
        </li>
      </ul> */}
    </div>
  );
};

export default NftList;
