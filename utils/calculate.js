const { access } = require("./access");
const {
  validateNumber,
  validateCoordinate,
  validateOperator,
} = require("./validateCharacter");

const filters = {
  "+": (currentValue, accumulator) => accumulator + currentValue,
  "-": (currentValue, accumulator) => accumulator - currentValue,
  "*": (currentValue, accumulator) => accumulator * currentValue,
  "/": (currentValue, accumulator) => accumulator / currentValue,
};

function calculate(cell) {
  const stack = [];

  cell.map((item) => {
    if (validateNumber(item)) {
      item = parseInt(item);
      stack.push(item);
    } else if (validateCoordinate(item)) {
      let accessed = access(item);

      if (typeof accessed == "number") {
        stack.push(accessed);
      } else {
        //break
      }
    } else if (validateOperator(item)) {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      const operands = [operand1, operand2];
      const value = operands.reduce(filters[item]);
      stack.push(value);
    }
  });

  if (stack[0] === "NaN") {
    return cell;
  } else {
    return stack[0];
  }
}

module.exports = calculate;
