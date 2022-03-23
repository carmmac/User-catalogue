import React from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {ApiActions} from "../../store/api-actions";
import {getUserSelector} from "../../store/selectors";
import styles from "./user-profile-form.module.scss";

const ProfileForm = ({isReadOnly}) => {
  const dispatch = useDispatch();

  const {
    name,
    username,
    email,
    address,
    phone,
    website,
  } = useSelector((state) => getUserSelector(state));

  const onSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    const update = {};
    for (const entry of data.entries()) {
      update[entry[0]] = entry[1];
    }
    dispatch(ApiActions.postProfileUpdate(update));
  };

  return (
    <>
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
    </>
  );
};

ProfileForm.propTypes = {
  isReadOnly: PropTypes.bool.isRequired,
};

export default ProfileForm;
