const input = "10 55 +, 55 17 - , 8 2 + 2 /";



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
      if(!isNaN(parseInt(value))){
            value = parseInt(value);
      }
      return value;
}

function calcumulate(row){
      const addition = (accumulator, currentValue) => accumulator + currentValue;
      const subtraction = (accumulator, currentValue) => accumulator - currentValue;
      const multiplication = (accumulator, currentValue) => accumulator * currentValue;
      const division = (accumulator, currentValue) => accumulator / currentValue;

      let values = []
      let operations = row.filter(item => isNaN(item));;

      operations.forEach(operation => {
            for(i=0; i<row.length; i++){
                  
                  console.log(row[i], row, values);

                  if(isNaN(row[i])){
                        values = row.slice(0, i)

                        if(row[i]=='+'){
                              values = values.reduce(addition);
                              row.splice(0, i+1, values);

                        }else if(row[i]=='-'){
                              values = values.reduce(subtraction);
                              row.splice(0, i+1, values);

                        }else if(row[i]=='*'){
                              values = values.reduce(multiplication);
                              row.splice(0, i+1, values);

                        }else if(row[i]=='/'){
                              values = values.reduce(division);
                              row.splice(0, i+1, values);
                        }
                  }
            }
      })

      return values;
}

table = tablify(input);
table = table.map(row => row.map(cell => intify(cell)));

console.log('start', table);

//running calculations for each row
table = table.map(row => calcumulate(row))

console.log('end', table);