import React from "react";
import {Link} from "react-router-dom";
import styles from "./user-list-item.module.scss";

const UserListItem = () => {
  return (<>
    <li className={styles.listItem}>
      <div>
        <div className={styles.row}>
          <span className="text--card  text--card-label">ФИО</span>
          <span className='text--card  text--card-value'>Ivan Ivanov</span>
        </div>
        <div className={styles.row}>
          <span className="text--card  text--card-label">город</span>
          <span className='text--card  text--card-value'>Moscow</span>
        </div>
        <div className={styles.row}>
          <span className="text--card  text--card-label">компания</span>
          <span className='text--card  text--card-value'>Google</span>
        </div>
      </div>
      <Link className={`text--link  ${styles.details}`} to={`/profile`}>Подробнее</Link>
    </li>
    <li className={styles.listItem}>
      <div>
        <div className={styles.row}>
          <span className="text--card  text--card-label">ФИО</span>
          <span className='text--card  text--card-value'>Ivan Ivanov</span>
        </div>
        <div className={styles.row}>
          <span className="text--card  text--card-label">город</span>
          <span className='text--card  text--card-value'>Moscow</span>
        </div>
        <div className={styles.row}>
          <span className="text--card  text--card-label">компания</span>
          <span className='text--card  text--card-value'>Google</span>
        </div>
      </div>
      <Link className={`text--link  ${styles.details}`} to={`/profile`}>Подробнее</Link>
    </li>
  </>
  );
};

export default UserListItem;
