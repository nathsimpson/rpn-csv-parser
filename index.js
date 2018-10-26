const input = "2018 1995 -, 55 17 + , 8 2 * 4 /";
const input1 = "b1 b2 +,2 b2 3 * -, ,+ , a1     ,5         , ,7 2 /, c2 3 * ,1 2       , ,5 1 2 + 4 * + 3 -"

const specs = {
      number : "[0-9]+",
      variable : "[a-z]+[0-9]+",
      operator: "[+\-\*\/]",
}

function tablify(input){
      let table = input.split(',');

      //converting each row to an array of cells
      table = table.map(row => row
            .trimStart()
            .trimEnd()
            .split(' ')
      );
      return table;
}

function intify(value){

      console.log('checking:', value.match(specs['number']));

      if(!isNaN(parseInt(value))){
            value = parseInt(value);
      }
      return value;
}

function calcumulate(row){

      const operators = {
            '+': (accumulator, currentValue) => accumulator + currentValue,
            '-': (accumulator, currentValue) => accumulator - currentValue,
            '*': (accumulator, currentValue) => accumulator * currentValue,
            '/': (accumulator, currentValue) => accumulator / currentValue,
      }

      let values = []

      //count how many time a calculation is performed in a row
      const operations = row.filter(item => isNaN(item));

      operations.forEach(operation => {
            for(i=0; i<row.length; i++){

                  if(isNaN(row[i])){
                        values = row.slice(0, i)

                        //perform calculation
                        values = values.reduce(operators[row[i]]);

                        //place calculated value into array
                        row.splice(0, i+1, values);
                  }
            }
      })

      return values;
}

console.log('start:', input);

//convert to table
table = tablify(input);
console.log('tablify:', table);

//convert each number in a cell to an integer
table = table.map(row => row.map(cell => intify(cell)));
console.log('intify:', table);

//running calculations for each row
table = table.map(row => calcumulate(row));
console.log('calcumulate:', table);
