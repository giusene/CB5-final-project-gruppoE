import styles from '@/components/modal/styles.module.scss'
function Modal({data}) {
    // console.log(data);
    const {name, description,image} = data;
  return (
    <div className={styles.main}>
        <img src={image}/>
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Modal