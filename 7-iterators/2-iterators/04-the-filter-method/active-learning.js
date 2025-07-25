/*
Instructions

1. Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.


2. Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.

***

| const randomNumbers = [375, 200, 3.14, 7, 13, 852];
| 
| // Call .filter() on randomNumbers below


| const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
| 
| // Call .filter() on favoriteWords below
*/

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumbers = randomNumbers.filter(function(number) {
  if (number < 250) {
    return true;
  }
});

// console.log(smallNumbers);

/***/

// OU
const smallNumbers2 = randomNumbers.filter(number => number < 250);

// console.log(smallNumbers2);

/***/

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => word.length > 7);
console.log(longFavoriteWords);