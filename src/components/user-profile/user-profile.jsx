import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Action} from "../../store/action";
import {ApiActions} from "../../store/api-actions";
import {Selector} from "../../store/selectors";
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
  } = useSelector((state) => Selector.getUser(state));
  const isUserLoaded = useSelector((state) =>
    Selector.getLoadIndicator.isUserLoaded(state)
  );

  const onUserLoad = () => {
    if (!isUserLoaded) {
      dispatch(ApiActions.fetchUser(id));
    }
  };

  const onPageLeave = () => dispatch(Action.clearUserData());

  const onEditBtnClick = () => setIsReadOnly(false);

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
          onClick={() => onEditBtnClick()}
        >
          Редактировать
        </button>
      </div>
      <form className={styles.form}>
        <fieldset className={styles.formField}>
          <label className={styles.label}>Name</label>
          <input className={styles.input} readOnly={isReadOnly} value={name} />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>User name</label>
          <input
            className={styles.input}
            readOnly={isReadOnly}
            value={username}
          />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>E-mail</label>
          <input className={styles.input} readOnly={isReadOnly} value={email} />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Street</label>
          <input
            className={styles.input}
            readOnly={isReadOnly}
            value={address.street}
          />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>City</label>
          <input
            className={styles.input}
            readOnly={isReadOnly}
            value={address.city}
          />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Zip code</label>
          <input
            className={styles.input}
            readOnly={isReadOnly}
            value={address.zipcode}
          />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Phone</label>
          <input className={styles.input} readOnly={isReadOnly} value={phone} />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Website</label>
          <input
            className={styles.input}
            readOnly={isReadOnly}
            value={website}
          />
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Comment</label>
          <textarea className={styles.commentArea}></textarea>
        </fieldset>
      </form>
      <button
        type="submit"
        className={`btn  btn--submit  ${styles.submitBtn}`}
        disabled={isReadOnly}
      >
        Отправить
      </button>
    </div>
  );
};

export default UserProfile;
