import React from "react";
import styles from "../loader/styles.module.scss";

const Loader = () => {
  return (
    <div class={styles.main}>
      <div class={styles.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
