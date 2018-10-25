const input = "10 55 +, 55 17 - , 8 2 +";

function intify(value){
      if(!isNaN(parseInt(value))){
            value = parseInt(value)
      }
      return value;
}

let table = input.split(',');

//converting each row to an array of cells, in the correct type
table = table.map(row => row
      .trimStart()
      .trimEnd()
      .split(' ')
      .map(cell => intify(cell))
);

console.log(table);