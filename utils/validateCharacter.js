const specs = {
  number: new RegExp("^[0-9]+"),
  coordinate: new RegExp("[a-z]+[0-9]+"),
  operator: new RegExp("[+\\-\\*\\/]"),
  letter: new RegExp("^[A-Za-z]+"),
};

const validateNumber = (item) => specs.number.test(item);
const validateCoordinate = (item) => specs.coordinate.test(item);
const validateOperator = (item) => specs.operator.test(item);

module.exports = {
  validateNumber,
  validateCoordinate,
  validateOperator,
};
