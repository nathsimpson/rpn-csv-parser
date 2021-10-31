const tablify = require("./tablify");
const { validateNumber } = require("./validateCharacter");

function access(key) {
  row = key.charCodeAt(0) - 97;
  cell = key.charAt(1) - 1;

  if (!validateNumber(row) || !validateNumber(cell)) {
    console.log("error, coordinate ", key.charAt(0), cell, "is invalid");
  }

  return table[row][cell];
}

module.exports = access;
