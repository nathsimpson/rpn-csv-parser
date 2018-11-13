const input1 = "2018 1995 -, 55 17 5 + - , 8 2 4 * /, 5 1 2 + 4 * + 3 -";

const input2 = `1 2 +,2 2 3 * -, ,+
  a1     ,5         , ,7 2 /
  c2 3 * ,1 2       , ,5 1 2 + 4 * + 3 -`;

const input = `b1 b2 +,2 b2 3 * -, ,+
a1     ,5         , ,7 2 /
c2 3 * ,1 2       , ,5 1 2 + 4 * + 3 -`;

const specs = {
  number: new RegExp("^[0-9]+"),
  coordinate: new RegExp("[a-z]+[0-9]+"),
  operator: new RegExp("[+\\-\\*\\/]")
};

function tablify(input) {
  //converting each row to an array of cells
  let table = input.split("\n").map(row =>
    row.split(",").map(cell => {
      return cell
        .trimStart()
        .trimEnd()
        .split(" ");
    })
  );

  return table;
}

function verify(cell) {
  const numbers = [];
  const operators = [];
  const variables = [];
  let error = false;

  cell.map(item => {
    if (specs.number.test(item)) {
      numbers.push(item);
    } else if (specs.coordinate.test(item)) {
      variables.push(item);
    } else if (specs.operator.test(item)) {
      operators.push(item);
    } else {
      error = true;
    }
  });

  if (
    (numbers.length < 1 || operators.length < 1 || error )
    && (cell.length != 1 && cell[0] != '')
  ){
    //console.log(cell);
    return "#ERR";
  } else if(cell.length == 1 && cell[0] == ''){
    return [ 0 ];
  }else {
    return cell;
  }
}

function calcumulate(cell) {
  const operators = {
    "+": (accumulator, currentValue) => accumulator + currentValue,
    "-": (accumulator, currentValue) => accumulator - currentValue,
    "*": (accumulator, currentValue) => accumulator * currentValue,
    "/": (accumulator, currentValue) => accumulator / currentValue
  };

  const stack = [];
  const values = [];

  cell.map(item => {
    if (specs.number.test(item)) {
      item = parseInt(item);
      stack.push(item);
    } else if (specs.operator.test(item)) {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      const operands = [operand2, operand1];
      const value = operands.reduce(operators[item]);
      stack.push(value);
    }
  });

  //console.log("calcumulate:", stack[0]);
  if (stack[0] === undefined) {
    return "";
  } else {
    return stack[0];
  }
}

console.log("input:", input);

table = tablify(input);

table = table.map(row =>
  row.map(cell => {
    cell = verify(cell);
    if(cell !=='#ERR'){console.log(cell); cell = calcumulate(cell)}
    return cell;
  })
);

console.log("output:", table);
