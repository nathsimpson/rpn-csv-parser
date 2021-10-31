const access = require("./utils/access");
const calculate = require("./utils/calculate");
const tablify = require("./utils/tablify");
const isCellValidForCalculation = require("./utils/isCellValidForCalculation");

function parser(input) {
  let table = tablify(input);

  table = table.map((row) =>
    row.map((cell) => {
      if (!isCellValidForCalculation(cell)) {
        return "#ERR";
      }

      if (cell.length == 1 && cell[0] == "") {
        return [0];
      }
      return calculate(cell);
    })
  );

  return table;
}

module.exports = parser;
