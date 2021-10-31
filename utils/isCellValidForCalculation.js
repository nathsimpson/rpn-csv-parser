const {
  validateNumber,
  validateCoordinate,
  validateOperator,
} = require("./validateCharacter");

/** Verify if a cell can be calculated */
function isCellValidForCalculation(cell) {
  const numbers = [];
  const coordinates = [];
  const values = []; // numbers or coordinates
  const operators = [];
  const invalid = [];

  // counting elements in a cell
  cell.forEach((item) => {
    if (validateNumber(item)) {
      numbers.push(item);
      values.push(item);
    } else if (validateCoordinate(item)) {
      coordinates.push(item);
      values.push(item);
    } else if (validateOperator(item)) {
      operators.push(item);
    } else {
      invalid.push(item);
    } // unknown entity found
  });

  // no invalid characters
  if (invalid.length) {
    return false;
  }

  // no numbers/coordinates, but 0 or more operators
  if (!numbers.length && !coordinates.length && operators.length) return false;

  // Same amount of values and operatord
  if (operators.length && values.length && operators.length >= values.length)
    return false;

  // console.log(
  //   "cell",
  //   cell,
  //   typeof cell,
  //   operators,
  //   values,
  //   operators.length === values.length
  // );

  // must be valid?
  return true;
}

module.exports = isCellValidForCalculation;
