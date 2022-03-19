import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ApiActions} from "../../store/api-actions";
import {Selector} from "../../store/selectors";
import UserListItem from "./user-list-item/user-list-item";
import styles from "./user-list.module.scss";

const UserList = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => Selector.getUsers(state));
  const isUserListLoaded = useSelector((state) =>
    Selector.getLoadIndicator.isUserListLoaded(state)
  );

  const onUserListLoad = () => {
    if (!isUserListLoaded) {
      dispatch(ApiActions.fetchUserList());
    }
  };

  useEffect(() => onUserListLoad(), [isUserListLoaded]);

  if (!isUserListLoaded) {
    return <div>LOADING.....</div>;
  }

  return (
    <>
      <div className="wrapper--catalogue">
        <h2 className={`title title--user-list`}>Список пользователей</h2>
        <ul className={`list  ${styles.userList}`}>
          {users.map((user, i) => (
            <UserListItem user={user} key={`user-${i}`} />
          ))}
        </ul>
        <span className={`text--base  ${styles.searchResult}`}>
          Найдено {users.length} пользователей
        </span>
      </div>
    </>
  );
};

export default UserList;
