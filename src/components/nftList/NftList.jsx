import { useState } from "react";
import NftItem from "../nftItem/NftItem";
import Modal from "../modal/Modal";
import styles from "../nftList/styles.module.scss";

const NftList = ({ data }) => {
  const [modalState, setModalState] = useState(false);

  let modalObj = {
    name:'',
    description: '',
    rarity: ''

  }
  const [modalCtx, setModalCtx] = useState(modalObj)

 
  const HandleModal = (value,img) =>{
    console.log(img)
    setModalState(() => !modalState);
    setModalCtx(modalObj= {
      name: value.contract.name,
      description: value.contract.metadata.description,
      image: img
     
      
    });
    
    
     
    }
  
  
  // data = nfts + contract

  return (
    <div className={styles.main}>
      <div className={styles.list}>
          {data.nfts.map((item, index) => (
            <NftItem item={item} key={index} data={data} HandleModal={HandleModal} />
          ))}
      </div>
      
        { modalState && <Modal data={modalCtx}/> }
      
      
      
      
    </div>
  );
};

export default NftList;
