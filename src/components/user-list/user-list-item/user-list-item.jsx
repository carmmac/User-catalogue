import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./user-list-item.module.scss";

const UserListItem = ({user}) => {
  const {id, name, address, company} = user;

  return (
    <li className={styles.listItem}>
      <div>
        <div className={styles.row}>
          <span className="text--card  text--card-label">ФИО</span>
          <span className="text--card  text--card-value">{name}</span>
        </div>
        <div className={styles.row}>
          <span className="text--card  text--card-label">город</span>
          <span className="text--card  text--card-value">{address.city}</span>
        </div>
        <div className={styles.row}>
          <span className="text--card  text--card-label">компания</span>
          <span className="text--card  text--card-value">{company.name}</span>
        </div>
      </div>
      <Link className={`text--link  ${styles.details}`} to={`/users/${id}`}>
        Подробнее
      </Link>
    </li>
  );
};

UserListItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserListItem;
