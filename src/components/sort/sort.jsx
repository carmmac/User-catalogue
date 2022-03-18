import React from "react";
import styles from "./sort.module.scss";

const Sort = () => {
  return (
    <aside className={styles[`sort`]}>
      <span className={[styles.sortTitle, styles.sortItem].join(` `)}>
        Сортировка
      </span>
      <button className={`btn  btn--sort  ${styles.sortItem}`}>по городу</button>
      <button className={`btn  btn--sort  ${styles.sortItem}`}>
        по компании
      </button>
    </aside>
  );
};

export default Sort;
