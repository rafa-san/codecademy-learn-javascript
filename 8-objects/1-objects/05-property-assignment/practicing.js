const spaceship = {type: 'shuttle'};

// spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.

spaceship.type = 'alien'; // Changes the value of the type property
console.log(spaceship.type); // alien

spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
console.log(spaceship.speed); // Mach 5



/*
****************************/
const spaceship2 = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};

delete spaceship2.mission; // Removes the mission property

console.log(spaceship2.missio); // undefined