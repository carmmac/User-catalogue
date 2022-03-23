import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Action} from "../../store/action";
import {ApiActions} from "../../store/api-actions";
import {getLoadIndicatorSelector} from "../../store/selectors";
import ProfileForm from "../user-profile-form/user-profile-form";
import styles from "./user-profile.module.scss";

const UserProfile = () => {
  const dispatch = useDispatch();
  const {id} = useParams();

  const [isReadOnly, setIsReadOnly] = useState(true);

  const isUserLoaded = useSelector((state) =>
    getLoadIndicatorSelector.isUserLoaded(state)
  );

  const onUserLoad = () => {
    if (!isUserLoaded) {
      dispatch(ApiActions.fetchUser(id));
    }
  };

  const onPageLeave = () => dispatch(Action.clearUserData());

  const onEditBtnClick = () => {
    setIsReadOnly(false);
  };

  useEffect(() => onUserLoad(), [isUserLoaded]);
  useEffect(() => {
    return () => onPageLeave();
  }, [id]);

  if (!isUserLoaded) {
    return <div>LOADING.....</div>;
  }

  return (
    <div className="wrapper--profile">
      <h1 className="visually-hidden">User profile page</h1>
      <div className={styles.header}>
        <h2 className="title">Профиль пользователя</h2>
        <button
          type="button"
          className="btn  btn--edit"
          onClick={onEditBtnClick}
        >
          Редактировать
        </button>
      </div>
      <ProfileForm isReadOnly={isReadOnly} />
      <button
        type="submit"
        className={`btn  btn--submit  ${styles.submitBtn}`}
        disabled={isReadOnly}
        form="formUserProfile"
      >
        Отправить
      </button>
    </div>
  );
};

export default UserProfile;
