import { useState } from "react";
import NftItem from "../nftItem/NftItem";
import Modal from "../modal/Modal";
import styles from "../nftList/styles.module.scss";

const NftList = ({ data }) => {
  const [modalState, setModalState] = useState(false);
  let modalObj = {
    name: "",
    description: "",
    rarity: "",
    image: "",
  };
  const [modalCtx, setModalCtx] = useState(modalObj);

  const HandleModal = (value, item) => {
    setModalState(true);
    setModalCtx(
      (modalObj = {
        name: value.contract.name,
        attributes: item.attributes,
        rarity: item.rarity.rank,
        image: item.cached_file_url,
      })
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.list}>
        {data.nfts.map((item, index) => (
          <NftItem
            item={item}
            key={index}
            data={data}
            HandleModal={HandleModal}
          />
        ))}
      </div>
      {modalState && (
        <div className={styles.modal_container}>
          <Modal data={modalCtx} setModalState={setModalState} />
        </div>
      )}
    </div>
  );
};

export default NftList;
