const specs = {
  number: new RegExp("^[0-9]+"),
  coordinate: new RegExp("[a-z]+[0-9]+"),
  operator: new RegExp("[+\\-\\*\\/]"),
  letter: new RegExp("^[A-Za-z]+"),
};

function access(key) {
  row = key.charCodeAt(0) - 97;
  cell = key.charAt(1) - 1;

  if (!specs.number.test(row) || !specs.number.test(cell)) {
    console.log("error, coordinate ", key.charAt(0), cell, "is invalid");
  }

  let accessed = table[row][cell];

  // console.log('accessed', accessed, row, cell);

  return accessed;
}

/** Converts each row to an array of cells */
function tablify(input) {
  return input
    .split("\n")
    .map((row) =>
      row.split(",").map((cell) => cell.trimStart().trimEnd().split(" "))
    );
}

function verify(cell) {
  const numbers = [];
  const operators = [];
  const coordinates = [];
  let error = false;

  cell.map((item) => {
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
  } else if (
    (numbers.length < 1 && coordinates.length < 1) ||
    operators.length < 1 ||
    error
  ) {
    return "#ERR";
  } else {
    return cell;
  }
}

module.exports = {
  access,
  specs,
  tablify,
  verify,
};
