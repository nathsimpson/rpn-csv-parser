const input1 = "2018 1995 -, 55 17 5 + - , 8 2 4 * /, 5 1 2 + 4 * + 3 -";

const input = `b1 b2 +,2 b2 3 * -, ,+
a1     ,5         , ,7 2 /
c2 3 * ,1 2       , ,5 1 2 + 4 * + 3 -, b4 1 +`;

const specs = {
  number: new RegExp("^[0-9]+"),
  coordinate: new RegExp("[a-z]+[0-9]+"),
  operator: new RegExp("[+\\-\\*\\/]"),
  letter: new RegExp("^[A-Za-z]+")
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
  const coordinates = [];
  let error = false;

  cell.map(item => {
    if (specs.number.test(item)) {
      numbers.push(item);
    } else if (specs.coordinate.test(item)) {
      coordinates.push(item);
    } else if (specs.operator.test(item)) {
      operators.push(item);
    } else {
      error = true;
    }
  });

  if (cell.length == 1 && cell[0] == "") {
    return [0];
  } else if ((numbers.length < 1 && coordinates.length < 1)|| operators.length < 1 || error) {
    return "#ERR";
  } else {
    return cell;
  }
}

function access(key) {
  row = key.charCodeAt(0) - 97;
  cell = key.charAt(1)-1;

  if (!specs.number.test(row) || !specs.number.test(cell)) {
    console.log("error, coordinate ", key.charAt(0), cell, "is invalid");
  }

  let accessed = table[row][cell];

  console.log('accessed', accessed, row, cell);

  return accessed
}

function calcumulate(cell) {
  const filters = {
    "+": (currentValue, accumulator) => accumulator + currentValue,
    "-": (currentValue, accumulator) => accumulator - currentValue,
    "*": (currentValue, accumulator) => accumulator * currentValue,
    "/": (currentValue, accumulator) => accumulator / currentValue
  };

  const stack = [];

  cell.map(item => {
    if (specs.number.test(item)) {
      item = parseInt(item);
      stack.push(item);

    } else if (specs.coordinate.test(item)) {
      let accessed = access(item);

      if(typeof(accessed)=='number'){
        stack.push(accessed);
      }else{
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

  console.log("calcumulate:", stack[0]);

  if (stack[0] === 'NaN') {
    return cell;
  } else {
    return stack[0];
  }
}

console.log("input:", input);

let table = tablify(input);

table = table.map(row =>
  row.map(cell => {
    cell = verify(cell);
    if (cell !== "#ERR") cell = calcumulate(cell);
    return cell;
  })
);

console.log("output:", table);
