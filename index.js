const { access, specs, tablify, verify } = require("./utils");

function calcumulate(cell) {
  const filters = {
    "+": (currentValue, accumulator) => accumulator + currentValue,
    "-": (currentValue, accumulator) => accumulator - currentValue,
    "*": (currentValue, accumulator) => accumulator * currentValue,
    "/": (currentValue, accumulator) => accumulator / currentValue,
  };

  const stack = [];

  cell.map((item) => {
    if (specs.number.test(item)) {
      item = parseInt(item);
      stack.push(item);
    } else if (specs.coordinate.test(item)) {
      let accessed = access(item);

      if (typeof accessed == "number") {
        stack.push(accessed);
      } else {
        //break
      }
    } else if (specs.operator.test(item)) {
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

function parser(input) {
  let table = tablify(input);

  table = table.map((row) =>
    row.map((cell) => {
      cell = verify(cell);
      if (cell !== "#ERR") cell = calcumulate(cell);
      return cell;
    })
  );

  return table;
}

module.exports = parser;
