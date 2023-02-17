import styles from "@/components/modal/styles.module.scss";
function Modal({ data, setModalState }) {
  const { name, attributes, rarity, image } = data;
  console.log(attributes);
  return (
    <div className={styles.main}>
      <button onClick={() => setModalState(false)}>X</button>
      <h3>{name}</h3>
      <img src={image} />
      <h2>Rarity ranking: #{rarity}</h2>
      <div className={styles.attributes}>
        {attributes.map((attr) => (
          <p>{`${attr.trait_type}: ${attr.value}`}</p>
        ))}
      </div>
    </div>
  );
}

export default Modal;
