import styles from "@/components/modal/styles.module.scss";
import Image from "next/image";

function Modal({ data, setModalState }) {
  const { name, attributes, rarity, image } = data;

  return (
    <div className={styles.main}>
      <button onClick={() => setModalState(false)}>X</button>
      <h3>{name}</h3>
      <Image src={image} alt={name} />
      <h2>
        Rarity ranking: <span>#{rarity}</span>
      </h2>
      <div className={styles.attributes}>
        {attributes.map((attr, index) => (
          <p key={index}>
            <h4 className={styles.trait}>{`${attr.trait_type}:`}</h4>
            <h4>{`${attr.value}`}</h4>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Modal;
