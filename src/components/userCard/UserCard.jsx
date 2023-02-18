import styles from "./styles.module.scss";

function UserCard({ data }) {
  return (
    <div className={styles.card}>
      <h4>
        {data.name} {data.surname}
      </h4>
    </div>
  );
}

export default UserCard;
