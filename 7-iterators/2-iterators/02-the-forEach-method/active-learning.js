/*
Instructions

1. Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.

You may use any form of callback you prefer.
*/

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// forma 1
function printFruits(fruit, index) {
  //console.log(`${index + 1}: ${fruit}`);
}

//fruits.forEach(printFruits);


/**** */


// forma 2
fruits.forEach(function(fruit, index) {
  //console.log(`${index + 1} - ${fruit}`);
})


/**** */


// forma 3
fruits.forEach((fruit, index) => {
  console.log(`${index + 1} * ${fruit}`);
})