import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Action} from "../../store/action";
import {ApiActions} from "../../store/api-actions";
import {
  getLoadIndicatorSelector,
  getUserSelector,
} from "../../store/selectors";
import styles from "./user-profile.module.scss";

const UserProfile = () => {
  const dispatch = useDispatch();
  const {id} = useParams();

  const [isReadOnly, setIsReadOnly] = useState(true);

  const {
    name,
    username,
    email,
    address,
    phone,
    website,
  } = useSelector((state) => getUserSelector(state));
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

  const onSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    const update = {};
    for (const entry of data.entries()) {
      update[entry[0]] = entry[1];
    }
    dispatch(ApiActions.postProfileUpdate(update));
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
      <form
        id="formUserProfile"
        action="#"
        method="POST"
        className={styles.form}
        autoComplete="off"
        encType="application/x-www-form-urlencoded"
        onSubmit={onSubmit}
      >
        <fieldset className={styles.formField}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            name="fullName"
            readOnly={isReadOnly}
            defaultValue={name}
          />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>User name</label>
          <input
            className={styles.input}
            name="username"
            readOnly={isReadOnly}
            defaultValue={username}
          />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>E-mail</label>
          <input
            className={styles.input}
            name="email"
            readOnly={isReadOnly}
            defaultValue={email}
          />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Street</label>
          <input
            className={styles.input}
            name="street"
            readOnly={isReadOnly}
            defaultValue={address.street}
          />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>City</label>
          <input
            className={styles.input}
            name="city"
            readOnly={isReadOnly}
            defaultValue={address.city}
          />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Zip code</label>
          <input
            className={styles.input}
            name="zipCode"
            readOnly={isReadOnly}
            defaultValue={address.zipcode}
          />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Phone</label>
          <input
            className={styles.input}
            name="phone"
            readOnly={isReadOnly}
            defaultValue={phone}
          />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Website</label>
          <input
            className={styles.input}
            name="website"
            readOnly={isReadOnly}
            defaultValue={website}
          />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Comment</label>
          <textarea className={styles.commentArea} name="comment"></textarea>
        </fieldset>
      </form>
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
