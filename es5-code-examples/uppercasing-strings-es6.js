const fruits = ['apple', 'banana', 'cherry'];

const uppercaseFruits = fruits.map((value) => {return value.toUpperCase()});

fruits.forEach((value) => {console.log(`Fruit: ${value}`)})

console.log(uppercaseFruits);
