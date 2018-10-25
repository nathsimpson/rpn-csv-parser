const input = "10 5 +, 5 3 - "
//const rowSpec = '(.*)[+\-*/],'
const rowSpec = '5'
const table = input.split(',');
//console.log(table);


// for (row in table) {
//     console.log(row.trimStart())
// }

console.log(table[1].trimStart());

// let test1 = table[1].match(rowSpec);
// console.log(test1);


// function rowify(){

// }
