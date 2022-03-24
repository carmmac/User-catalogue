import {EMAIL_REGEX, ZIPCODE_REGEX, FormFieldNames} from "../const";
import {checkIsFormFieldRequired} from "./base-utility";

export const validate = (values) => {
  const inputNames = Object.keys(values);
  const error = {};

  inputNames.forEach((name) => {
    if (!values[name] && checkIsFormFieldRequired(name)) {
      error[name] = `${name} is required!`;
    }

    if (name === FormFieldNames.EMAIL && !EMAIL_REGEX.test(values[name])) {
      error[name] = `invalid ${name} format!`;
    }

    if (name === FormFieldNames.ZIPCODE && !ZIPCODE_REGEX.test(values[name])) {
      error[name] = `invalid ${name} format!`;
    }
  });

  return error;
};
