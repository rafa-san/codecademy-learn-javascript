/*
Instructions

1. Add your code under the animals array and before the line console.log(secretMessage.join(''));

Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.


2. Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.
*/

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// RESOLUÇÃO #1
function getFirstWord(animal) {
  return animal[0];
}

const secretMessage1 = animals.map(getFirstWord);
// console.log(secretMessage1.join(''));

/***/

// RESOLUÇÃO #2
const secretMessage2 = animals.map(function (firstWord) {
  return firstWord[0];
})

// console.log(secretMessage1.join(''));

/***/

// RESOLUÇÃO #3
const secretMessage3 = animals.map(firstWord => firstWord[0]);

// console.log(secretMessage3.join(''));



/*
CREATE THE SMALLNUMBERS ARRAY BELOW
****************************/
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(number => number / 100);

// console.log(bigNumbers);
// console.log(smallNumbers);

// OU

const smallNumbers2 = bigNumbers.map(number => {
  return number / 100;
});

console.log(bigNumbers);
console.log(smallNumbers);