import {FormFieldNames} from "../const";

/* eslint-disable no-nested-ternary */
const compareProps = ([propA, propB]) => (a, b) =>
  a[propA][propB] === b[propA][propB]
    ? 0
    : a[propA][propB] > b[propA][propB]
      ? 1
      : -1;

const checkIsFormFieldRequired = (field) => {
  return FormFieldNames[field.toUpperCase()].isRequired;
};

const checkIsObjEmpty = (obj) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

export {compareProps, checkIsFormFieldRequired, checkIsObjEmpty};
