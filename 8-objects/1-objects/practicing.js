// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};


/*
-----------------*/

//console.log('rafael'.length); // 6



/*
-----------------*/

let spaceship2 = {
  homePlanet: 'Earth',
  color: 'silver'
}
// console.log(spaceship2.homePlanet); // Returns 'Earth',
// console.log(spaceship2.color); // Returns 'silver',
// console.log(spaceship2.favoriteIcecream); // Returns undefined


/*
-----------------*/

//console.log(['A', 'B', 'C'][0]); // Returns 'A'/*


/*
-----------------*/

let spaceship3 = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};

// console.log(spaceship3['Active Duty']);   // Returns true
// console.log(spaceship3['Fuel Type']);   // Returns  'Turbo Fuel'
// console.log(spaceship3['numCrew']);   // Returns 5
// console.log(spaceship3['!!!!!!!!!!!!!!!']);   // Returns undefined


/*
-----------------*/
let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship3, 'homePlanet'); // Returns 'Earth'


/*
-----------------*/
const spaceship4 = {
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
}

//console.log(spaceship4.nanoelectronics['back-up'].battery); // Returns 'Lithium'


/*
-----------------*/

let spaceship5 = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 

// for...in
for (let crewMember in spaceship5.crew) {
  //console.log(`${crewMember}: ${spaceship5.crew[crewMember].name}`);
}

// contar o número de integrantes
let totalIntegrantes = Object.keys(spaceship5.crew).length;
console.log(`Total de integrantes: ${totalIntegrantes}`);