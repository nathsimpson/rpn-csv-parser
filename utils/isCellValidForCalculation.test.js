const verify = require("./isCellValidForCalculation");

const expectedResults = [
  [["5"], true],
  [["+"], false],
  [["a9"], true],
  [["5", "2", "+"], true],
  [["5", "+"], false],
  [["5", "+", "/"], false],
  [["5", "$"], false],
  [["8", "2", "*", "4", "/"], true],
  [["5", "1", "2", "+", "4", "*", "+", "3", "-"], true],
];

expectedResults.forEach(([input, isValid]) => {
  test(`Verify ${input.toString()}`, () => {
    expect(verify(input)).toBe(isValid);
  });
});
