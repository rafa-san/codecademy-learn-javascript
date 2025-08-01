let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};

console.log(spaceship['Active Duty']); // true
console.log(spaceship['Fuel Type']); // Turbo Fuel
console.log(spaceship['numCrew']); // 5
console.log(spaceship['!!!!!!!!!!!!!!!']); // undefined



/*
****************************/
let returnAnyProp = (objectName, propName) => objectName[propName];

console.log(returnAnyProp(spaceship, 'homePlanet')); // Earth



/*
****************************/
console.log(['A', 'B', 'C'][0]); // A