// Array of fruits
var fruits = ['apple', 'banana', 'cherry'];

// Checking if the array includes 'banana' using for loop
var includesBanana = false;
for (var i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'banana') {
        includesBanana = true;
        break;
    }
}

console.log('Includes banana:', includesBanana); // Output: Includes banana: true

// Checking if every fruit has more than 5 characters using for loop
var everyFruitHasMoreThanFiveChars = true;
for (var i = 0; i < fruits.length; i++) {
    if (fruits[i].length <= 5) {
        everyFruitHasMoreThanFiveChars = false;
        break;
    }
}

console.log('Every fruit has more than five characters:', everyFruitHasMoreThanFiveChars); // Output: false

// Checking if some fruits have more than 5 characters using for loop
var someFruitsHaveMoreThanFiveChars = false;
for (var i = 0; i < fruits.length; i++) {
    if (fruits[i].length > 5) {
        someFruitsHaveMoreThanFiveChars = true;
        break;
    }
}

console.log('Some fruits have more than five characters:', someFruitsHaveMoreThanFiveChars); // Output: true
