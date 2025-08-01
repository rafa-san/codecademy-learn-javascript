const spaceship = {
  telescope: {
    yearBuilt: 2018,
    model: '91031-XLT',
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') } 
    }
  },
  engine: {
    model: 'Nimbus2000'
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: 'HD'
    },
    'back-up': {
      battery: 'Lithium',
      terabytes: 50
    }
  }
};

// console.log(spaceship.nanoelectronics['back-up'].battery); // Lithium



/*
****************************/
let spaceship2 = {
  passengers: [
    {nome: 'Rafael'},
    {nome: 'Alien: O Oitavo Passageiro'}
  ],
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
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
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
};

console.log(spaceship2.passengers[0].nome); // Rafael
console.log(spaceship2.passengers[1].nome); // Alien: O Oitavo Passageiro

const capFave = spaceship2.crew.captain['favorite foods'][0];
console.log(capFave);

const firstPassenger = spaceship2.passengers[0];