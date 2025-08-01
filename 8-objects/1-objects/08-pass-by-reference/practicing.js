const spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship);

console.log(spaceship.color); // glorious gold