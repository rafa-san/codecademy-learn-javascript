/*
Instructions

1. Reassign the color property of the spaceship object to have a value of 'glorious gold'


2. Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.


3. Use the delete operator to remove the 'Secret Mission' property from the spaceship object.

***

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
*/

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
console.log(spaceship.color);

spaceship['numEngines'] = 8;
console.log(spaceship.numEngines);

delete spaceship['Secret Mission'];
console.log(spaceship['Secret Mission']);