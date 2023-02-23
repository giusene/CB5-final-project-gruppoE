import React from "react";
import styles from "../loader/styles.module.scss";

const Loader = () => {
  return (
    <div className={styles.main}>
      <div className={styles.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
