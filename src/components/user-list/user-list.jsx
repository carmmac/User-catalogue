import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ApiActions} from "../../store/api-actions";
import {
  getLoadIndicatorSelector,
  getSortedUsersSelector,
  getSortTypeSelector,
} from "../../store/selectors";
import UserListItem from "../user-list-item/user-list-item";
import styles from "./user-list.module.scss";

const UserList = () => {
  const dispatch = useDispatch();

  const sortType = useSelector((state) => getSortTypeSelector(state));
  const users = useSelector((state) => getSortedUsersSelector(state, sortType));
  const isUserListLoaded = useSelector((state) =>
    getLoadIndicatorSelector.isUserListLoaded(state)
  );

  const [userList, setUserList] = useState(users);

  const onUserListLoad = () => {
    if (!isUserListLoaded) {
      dispatch(ApiActions.fetchUserList());
    } else {
      setUserList(users);
    }
  };

  useEffect(() => onUserListLoad(), [isUserListLoaded]);
  useEffect(() => setUserList(users), [users]);

  if (!isUserListLoaded) {
    return <div>LOADING.....</div>;
  }

  return (
    <div className="wrapper--catalogue">
      <h2 className={`title title--user-list`}>Список пользователей</h2>
      <ul className={`list  ${styles.userList}`}>
        {userList.map((user, i) => (
          <UserListItem user={user} key={`user-${i}`} />
        ))}
      </ul>
      <span className={`text--base  ${styles.searchResult}`}>
        Найдено {users.length} пользователей
      </span>
    </div>
  );
};

export default UserList;
