import React from "react";
import UserListItem from "./user-list-item/user-list-item";
import styles from "./user-list.module.scss";

const UserList = () => {
  return (
    <>
      <div className="wrapper--catalogue">
        <h2 className={`title title--user-list`}>Список пользователей</h2>
        <ul className={`list  ${styles.userList}`}>
          <UserListItem />
        </ul>
        <span className={`text--base  ${styles.searchResult}`}>
          Найдено 10 пользователей
        </span>
      </div>
    </>
  );
};

export default UserList;
