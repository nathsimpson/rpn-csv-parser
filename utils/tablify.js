/**
 * Converts each row to an array of cells.
 * Rows[] contains Columns[] contains Cell[] contains items:string
 * */
function tablify(input) {
  return input
    .split("\n")
    .map((row) =>
      row.split(",").map((cell) => cell.trimStart().trimEnd().split(" "))
    );
}

module.exports = tablify;
