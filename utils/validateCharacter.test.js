const {
  validateNumber,
  validateCoordinate,
  validateOperator,
} = require("./validateCharacter");

validateNumber;
validateCoordinate;
validateOperator;

const expectedResults = [
  ["+", "operator"],
  ["-", "operator"],
  ["/", "operator"],
  ["*", "operator"],
  ["0", "number"],
  ["2", "number"],
  ["10000", "number"],
  ["a2", "coordinate"],
  ["z10", "coordinate"],
];

// number
expectedResults.forEach(([input, value]) => {
  test(`Verify ${input.toString()} is number`, () => {
    expect(validateNumber(input)).toBe(value === "number");
  });
});

// operator
expectedResults.forEach(([input, value]) => {
  test(`Verify ${input.toString()} is operator`, () => {
    expect(validateOperator(input)).toBe(value === "operator");
  });
});

// coordinate
expectedResults.forEach(([input, value]) => {
  test(`Verify ${input.toString()} is coordinate`, () => {
    expect(validateCoordinate(input)).toBe(value === "coordinate");
  });
});
