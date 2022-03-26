const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ZIPCODE_REGEX = /^[0-9]{5}-[0-9]{4}$/;

const FormFieldNames = {
  NAME: {
    name: `name`,
    label: `Name`,
    isRequired: true,
  },
  USERNAME: {
    name: `username`,
    label: `Username`,
    isRequired: true,
  },
  EMAIL: {
    name: `email`,
    label: `E-mail`,
    isRequired: true,
  },
  STREET: {
    name: `street`,
    label: `Street`,
    isRequired: true,
  },
  CITY: {
    name: `city`,
    label: `City`,
    isRequired: true,
  },
  ZIPCODE: {
    name: `zipcode`,
    label: `Zip code`,
    isRequired: true,
  },
  PHONE: {
    name: `phone`,
    label: `Phone`,
    isRequired: true,
  },
  WEBSITE: {
    name: `website`,
    label: `Website`,
    isRequired: true,
  },
  COMMENT: {
    name: `comment`,
    label: `Comment`,
    isRequired: false,
  },
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

export {EMAIL_REGEX, ZIPCODE_REGEX, FormFieldNames, PropNames, SortType};
