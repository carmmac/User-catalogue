import React from "react";
import PropTypes from "prop-types";
import {FormFieldNames} from "../../const";
import styles from "./form-field.module.scss";

const FormField = ({
  name,
  label,
  defaulValue = ``,
  isReadOnly,
  onChange,
  errorMessage = ``,
}) => {
  return (
    <fieldset className={styles.formField}>
      <label className={styles.label}>{label}</label>
      {name === FormFieldNames.COMMENT.name ? (
        <textarea className={styles.commentArea} name={name}></textarea>
      ) : (
        <>
          <input
            className={`input  ${errorMessage ? `input--error` : ``}`}
            name={name}
            readOnly={isReadOnly}
            defaultValue={defaulValue}
            onChange={onChange}
          />
          {errorMessage && (
            <span className={`text--error  ${styles.errorMessage}`}>
              {errorMessage}
            </span>
          )}
        </>
      )}
    </fieldset>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaulValue: PropTypes.string,
  isReadOnly: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default FormField;
