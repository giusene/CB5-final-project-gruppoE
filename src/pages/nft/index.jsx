import NftList from "@/components/nftList/NftList";
import styles from "@/styles/nft.module.scss";
import { FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import Loader from "@/components/loader/Loader";

const Nft = ({ data }) => {
  const [showDescr, setShowDescr] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleClick = () => {
    setShowDescr((prev) => !prev);
  };

  return (
    <div className={styles.main}>
      {loading === true && <Loader />}
      {loading === false && (
        <>
          <div className={styles.info}>
            <div className={styles.title}>
              <h3>{data.contract.name}</h3>
              <i
                className={`${styles.icon} ${showDescr ? styles.rotate : ""}`}
                onClick={handleClick}
              >
                <FaChevronDown />
              </i>
            </div>
            <div
              className={`${styles.description} ${
                showDescr ? styles.show : styles.hide
              }`}
            >
              <p>{data.contract.metadata.description}</p>
            </div>
          </div>
          <NftList data={data} />
        </>
      )}
    </div>
  );
};

export default Nft;

/* FETCH */
export async function getStaticProps() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  const res = await fetch(
    `https://api.nftport.xyz/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?chain=ethereum&page_number=1&page_size=10&include=all&refresh_metadata=false`,
    options
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
