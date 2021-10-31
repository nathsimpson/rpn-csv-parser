const tablify = require("./tablify");

const inputBasic = "2018 1995 -";

const input1 = "2021 1995 -, 55 17 5 + - , 8 2 4 * /, 5 1 2 + 4 * + 3 -";

const input2 = `b1 b2 +,2 b2 3 * -, ,+
a1     ,5         , ,7 2 /
c2 3 * ,1 2       , ,5 1 2 + 4 * + 3 -, b4 1 +`;

test("Tablify: basic", () => {
  expect(tablify(inputBasic)).toStrictEqual([[["2018", "1995", "-"]]]);
});

test("Tablify: input 1", () => {
  expect(tablify(input1)).toStrictEqual([
    [
      ["2021", "1995", "-"],
      ["55", "17", "5", "+", "-"],
      ["8", "2", "4", "*", "/"],
      ["5", "1", "2", "+", "4", "*", "+", "3", "-"],
    ],
  ]);
});

test("Tablify: input 2", () => {
  expect(tablify(input2)).toStrictEqual([
    [["b1", "b2", "+"], ["2", "b2", "3", "*", "-"], [""], ["+"]],
    [["a1"], ["5"], [""], ["7", "2", "/"]],
    [
      ["c2", "3", "*"],
      ["1", "2"],
      [""],
      ["5", "1", "2", "+", "4", "*", "+", "3", "-"],
      ["b4", "1", "+"],
    ],
  ]);
});
