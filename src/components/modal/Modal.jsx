import styles from "@/components/modal/styles.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";

function Modal({ data, setModalState }) {
  const { name, attributes, rarity, image } = data;

  return (
    <div className={styles.main}>
      <i onClick={() => setModalState(false)}>
        <AiOutlineCloseCircle />
      </i>
      <div className={styles.elements}>
        <div className={styles.title}>
          <h2>{name.toUpperCase()}</h2>
        </div>
        <div className={styles.image}>
          <Image src={image} alt={name} width={500} height={500} />
          <h3>
            RARITY RANK: <span>#{rarity}</span>
          </h3>
        </div>

        <div className={styles.attributes}>
          {attributes.map((attr, index) => (
            <div key={index}>
              <h3 className={styles.trait}>{attr.trait_type}</h3>
              <h3 className={styles.values}>{`${attr.value}`}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
