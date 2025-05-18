/*
*/
const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

// modo 1 de usar forEach()
function printGrocery(element){
  //console.log(element);
}
groceries.forEach(printGrocery);


// modo 2 de usar forEach()
groceries.forEach(function(groceryItem) {
  //console.log(' - ' + groceryItem);
})


// modo 3 de usar forEach()
//groceries.forEach(groceryItem => console.log(' - ' + groceryItem));



/*
*/
// To call .filter() on an array you can use the following syntax:

const numbers = [10, 20, 30, 40, 50];

const filteredNums = numbers.filter(function(number) {
  if (number < 25) {
    return true;
  }
});

//console.log(filteredNums);

// You can also use arrow function syntax:

//const filteredNums = numbers.filter(number => number < 25);


/*
*/
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5;
});

//console.log(filteredArray);



/*
*/
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// fruits.forEach(function(unidades, index) {
//   console.log(index + ' - ' + unidades);
// })

//fruits.forEach(unidades => console.log(unidades));



/*
*/
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});

//console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
//console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']



/*
*/
const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

//console.log('index: ' + lessThanTen); // Output: 3 
//console.log(jumbledNums[3]); // Output: 5



/*
*/
// To call/invoke .findIndex() you will need a conditional statement in your callback function:
const arrSample = [1, 2, 3, 4, 5, 5, 6, 7];

const fiveElement = arrSample.findIndex(num => {
  return num === 5;
});

//If we check fiveElement:
//console.log(fiveElement); // 4

// The first element with a value of 5 is in index 4.



/*
*/
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// const foundAnimal = animals.findIndex(animal => {
//   return animal === 'elephant';
// });

const foundAnimal = animals.findIndex(myFunction);

function myFunction(animal, index) {

  if (animal === 'elephant') {
    return `${index}: ${animal}`;
  }
}

//console.log(foundAnimal); // 7
//console.log(animals[7]); // elephant



/*
*/
const numbers10 = [1, 2, 4, 10];

const summedNums10 = numbers10.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
})

console.log(summedNums10) // Output: 17



/*
*/
const numbers2 = [1, 2, 4, 10];

const summedNums = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117



/*
*/
/*
The syntax for a function expression looks like:

const reduceExample = sampleArr.reduce(function(accumulator, currentValue) {

});


The syntax for an arrow function looks like:

const reduceExample = sampleArr.reduce((accumulator, currentValue) => {

});



Your code should looks similar to:

const newSum = newNumbers.reduce(function(accumulator, currentValue){
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
})

Or

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
})



Your code should look like:

const newSum = newNumbers.reduce(function(accumulator, currentValue){
  // Existing code...
}, 10)


const newSum = newNumbers.reduce((accumulator, currentValue) => {
  // Existing code...
}, 10)
*/