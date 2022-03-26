import React, {useState} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {ApiActions} from "../../store/api-actions";
import {getUserSelector} from "../../store/selectors";
import styles from "./user-profile-form.module.scss";
import {validate} from "../../utility/validate";
import {FormFieldNames} from "../../const";
import FormField from "../form-input/form-field";
import {checkIsObjEmpty} from "../../utility/base-utility";

const ProfileForm = ({isReadOnly}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => getUserSelector(state));
  const [inputError, setInputError] = useState({});

  const onSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    const update = {};
    for (const entry of data.entries()) {
      update[entry[0]] = entry[1];
    }
    const error = validate(update);
    setInputError(error);
    if (checkIsObjEmpty(error)) {
      dispatch(ApiActions.postProfileUpdate(update));
    }
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
        {Object.values(FormFieldNames).map(({name, label}, i) => (
          <FormField
            name={name}
            label={label}
            defaulValue={user[name] ?? user.address[name]}
            isReadOnly={isReadOnly}
            onChange={() => {}}
            key={`form-field_${i}`}
            errorMessage={inputError[name]}
          />
        ))}
      </form>
    </>
  );
};

ProfileForm.propTypes = {
  isReadOnly: PropTypes.bool.isRequired,
};

export default ProfileForm;
