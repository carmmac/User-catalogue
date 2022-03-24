const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ZIPCODE_REGEX = /^[0-9]{5}-[0-9]{4}$/;

const FormFieldNames = {
  NAME: {name: `name`, isRequired: true},
  USERNAME: {name: `username`, isRequired: true},
  EMAIL: {name: `email`, isRequired: true},
  STREET: {name: `street`, isRequired: true},
  CITY: {name: `city`, isRequired: true},
  ZIPCODE: {name: `zipcode`, isRequired: true},
  PHONE: {name: `phone`, isRequired: true},
  WEBSITE: {name: `website`, isRequired: true},
  COMMENT: {name: `comment`, isRequired: false},
};

const PropNames = {
  CITY: [`address`, `city`],
  COMPANY: [`company`, `name`],
};

const SortType = {
  NONE: `none`,
  CITY: `CITY`,
  COMPANY: `COMPANY`,
};

export {
  EMAIL_REGEX,
  ZIPCODE_REGEX,
  FormFieldNames,
  PropNames,
  SortType,
};
