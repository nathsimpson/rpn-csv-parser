const parser = require("./index");

const input1 = "10 55 +, 55 17 - , 8 2 + 2 /";

const input2 = "2021 1995 -, 55 17 + 5 - , 8 2 * 4 /, 5 1 2 + 4 * + 3 -, 2";

const input3 = `b1 b2 +,2 b2 3 * -, ,+
a1     ,5         , ,7 2 /
c2 3 * ,1 2       , ,5 1 2 + 4 * + 3 -, b4 1 +`;

test("Basic test", () => {
  expect(parser("2021 1995 -")).toStrictEqual([[26]]);
});

test("Parser: Single line", () => {
  expect(parser(input1)).toStrictEqual([[65, 38, 5]]);
});

test("Parser: Input 2", () => {
  expect(parser(input2)).toStrictEqual([[26, 67, 4, 14, 2]]);
});

// test("Final test", () => {
//   expect(parser(input3)).toStrictEqual([
//     [-8, -13, 0, "#ERR"],
//     [-8, 5, 0, 3.5],
//     [0, "#ERR", 0, 14],
//   ]);
// });
