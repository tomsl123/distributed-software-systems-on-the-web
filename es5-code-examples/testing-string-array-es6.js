const fruits = ['apple', 'banana', 'cherry'];

const includesBanana = fruits.includes('banana');

console.log('Includes banana:', includesBanana);

const everyFruitHasMoreThanFiveChars = fruits.filter((value) => value.length > 5).length === fruits.length;

console.log('Every fruit has more than five characters:', everyFruitHasMoreThanFiveChars);

const someFruitsHaveMoreThanFiveChars = fruits.filter((value) => value.length > 5).length > 0;

console.log('Some fruits have more than five characters:', someFruitsHaveMoreThanFiveChars);
