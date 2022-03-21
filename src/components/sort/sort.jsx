import React from "react";
import {useDispatch} from "react-redux";
import {SortType} from "../../const";
import {Action} from "../../store/action";
import styles from "./sort.module.scss";

const Sort = () => {
  const dispatch = useDispatch();

  const onSortBtnClick = (evt) => {
    evt.preventDefault();
    dispatch(Action.changeSortType(evt.target.value));
  };

  return (
    <aside className={styles[`sort`]}>
      <span className={[styles.sortTitle, styles.sortItem].join(` `)}>
        Сортировка
      </span>
      <button
        type="button"
        value={SortType.CITY}
        className={`btn  btn--sort  ${styles.sortItem}`}
        onClick={(evt) => onSortBtnClick(evt)}
      >
        по городу
      </button>
      <button
        type="button"
        value={SortType.COMPANY}
        className={`btn  btn--sort  ${styles.sortItem}`}
        onClick={(evt) => onSortBtnClick(evt)}
      >
        по компании
      </button>
    </aside>
  );
};

export default Sort;
