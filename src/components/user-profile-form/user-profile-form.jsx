import React, {useState} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {ApiActions} from "../../store/api-actions";
import {getUserSelector} from "../../store/selectors";
import {validate} from "../../utility/validate";
import {FormFieldNames} from "../../const";
import {checkIsObjEmpty} from "../../utility/base-utility";
import FormField from "../form-input/form-field";
import styles from "./user-profile-form.module.scss";

const ProfileForm = ({isReadOnly}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => getUserSelector(state));

  const [inputError, setInputError] = useState({});
  const [userData, setUserData] = useState(user);

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
      setTimeout(() => history.push(`/`), 500);
    }
  };

  const onChange = (evt) => {
    evt.preventDefault();
    evt.persist();
    setUserData((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
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
          defaulValue={userData[name] ?? userData.address[name]}
          isReadOnly={isReadOnly}
          onChange={onChange}
          key={`form-field_${i}`}
          errorMessage={inputError[name]}
        />
      ))}
    </form>
  );
};

ProfileForm.propTypes = {
  isReadOnly: PropTypes.bool.isRequired,
};

export default ProfileForm;
