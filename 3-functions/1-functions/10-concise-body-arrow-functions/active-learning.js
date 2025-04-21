/*
Instructions

1. Let’s refactor plantNeedsWater() to be a concise body. Notice that we’ve already converted the if/else statement to a ternary operator to make the code fit on one line.


***


const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};
*/

const plantNeedsWater = day => day === 'Wednesday' ? true : false;

console.log(plantNeedsWater('Sunday'));