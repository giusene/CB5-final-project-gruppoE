import styles from "@/components/modal/styles.module.scss";
function Modal({ data, setModalState }) {
  const { name, attributes, rarity, image } = data;
  console.log(attributes);
  return (
    <div className={styles.main}>
      <button onClick={() => setModalState(false)}>X</button>
      <h3>{name}</h3>
      <img src={image} />
      <h2>Rarity ranking: <span>#{rarity}</span></h2>
      <div className={styles.attributes}>
        {attributes.map((attr) => (
          <p><h4 className={styles.trait}>{`${attr.trait_type}:`}</h4><h4>{`${attr.value}`}</h4> </p>
        ))}
      </div>
    </div>
  );
}

export default Modal;
