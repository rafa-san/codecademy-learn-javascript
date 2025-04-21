/*
Instructions

1. Change plantNeedsWater() to use arrow function syntax.


***


const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
*/

const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}

console.log(plantNeedsWater('Sunday'));