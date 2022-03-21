/* eslint-disable no-nested-ternary */
const compareProps = ([propA, propB]) => (a, b) =>
  a[propA][propB] === b[propA][propB]
    ? 0
    : a[propA][propB] > b[propA][propB]
      ? 1
      : -1;

export {compareProps};
