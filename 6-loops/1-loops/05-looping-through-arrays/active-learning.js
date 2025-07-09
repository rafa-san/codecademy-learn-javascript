/*
Instructions

1. Write a for loop that iterates through our vacationSpots array using i as the iterator variable.

Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console.


***


const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
*/

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}